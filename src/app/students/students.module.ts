import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentFormDialogComponent } from './components/student-form-dialog/student-form-dialog.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { SharedModule } from '../shared/shared.module';
import { ControlErrorMessagePipe } from './control-error-message.pipe';
import { FullNamePipe } from './full-name.pipe';
import { CabeceraDirective } from './cabecera.directive';




@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormDialogComponent,
    StudentTableComponent,
    ControlErrorMessagePipe,
    FullNamePipe,
    CabeceraDirective
  ],
  imports: [
    CommonModule,
    SharedModule 

  ],
  exports: [
    StudentsComponent
  ]
  
})
export class StudentsModule { }
