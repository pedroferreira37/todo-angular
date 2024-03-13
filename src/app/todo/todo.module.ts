import { NgModule } from '@angular/core';
import { LucideAngularModule, Trash2, Check } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Trash2,
      Check,
    }),
  ],

  exports: [LucideAngularModule],
})
export class TodoModule {}
