import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(student: Student, ...args: unknown[]): unknown {
    return `${student.nombre} ${student.apellido}`;
  }

}
