import { Component, OnDestroy } from '@angular/core';
import { Student } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from  './student.service';
import { Observable, Subscription, delay, filter, map } from 'rxjs';




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnDestroy {
  
  public students: Observable<Student[]>;
   public numeros: number[]=[];



  public numerosSubscription?: Subscription;

  
  constructor(private matDialog: MatDialog, private studentService: StudentService)
  {
    this.students = this.studentService.getStudents().pipe(
      map((v) =>
        v.map((student) => ({
        ...student,
        nombre: student.nombre.toUpperCase(),
        apellido: student.apellido.toUpperCase(),
        nota : student.nota *10,
      }))
    ),
    
    );

    this.studentService.loadStudent();

    const numeros = new Observable<number>((s) => {
      let numero = 1;
      setInterval(() => {
          s.next(numero+1);
          numero++;

      },500);
    });

  this.numerosSubscription = numeros.pipe(
        map((numero) => numero * 2),
        filter((numero) => (numero % 10 === 0))
        )
        .subscribe({
          next: (numero) => {
          this.numeros.push(numero);
          },
          error: () => {},
          complete: () => {
            console.log('Se completo');
          },
        });

  }

  ngOnDestroy(): void {
    console.log('numeros destruidos');
    this.numerosSubscription?.unsubscribe();
  }


  
}
