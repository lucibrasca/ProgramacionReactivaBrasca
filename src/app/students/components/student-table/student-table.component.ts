import { Component,  Input } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {
  displayedColumns: string[] = ['id', 'nombreCompleto', 'documento', 'email', 'nota'];

  @Input()
  dataSource: Student[] = [];

 
}
