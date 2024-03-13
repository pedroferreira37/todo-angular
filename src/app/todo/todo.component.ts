import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoModule } from './todo.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  value: string = '';
  todos: Todo[] = [
    {
      content: '123',
      done: false,
      id: 1,
    },
  ];

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.add({ id: this.todos.length + 1, content: this.value, done: false });
    }
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }

  done(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, done: true } : todo
    );
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  markAsDone(id: number) {
    this.done(id);
  }
}

interface Todo {
  id: number;
  content: string;
  done: boolean;
}
