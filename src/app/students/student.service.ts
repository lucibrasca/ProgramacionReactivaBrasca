import { Injectable } from '@angular/core';
import { Student } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

private students : Student[] =
[
  {
    id: 1,
    nombre: 'Benicio',
    apellido: 'Lopez',
    email: 'blopez@gmail.com',
    contrasenia: '12345678',
    telefono: '0342-15567889',
    documento: 37890987,
    nota : 3
  },
  {
    id: 2,
    nombre: 'Isabella',
    apellido: 'Almada',
    email: 'ialmada@gmail.com',
    contrasenia: '87654321',
    telefono: '0342-15680964',
    documento: 25890752,
    nota : 5
  },
  {
    id: 3,
    nombre: 'Walter',
    apellido: 'Milessi',
    email: 'wmilessi@hotmail.com',
    contrasenia: '67805432',
    telefono: '0342-154443327',
    documento: 34896543,
    nota: 6
  },

  ];

  private _students$ = new BehaviorSubject<Student[]>([]);

  constructor() { }

  loadStudent()
  {
    this._students$.next(this.students);
  }


  getStudents(): Subject<Student[]>
  {
    return this._students$;
  }



}
