import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  mensaje: string = "¡Esto es un ejemplo de interpolación en Angular!"
  nombre = "Caleb"
  edad: number = 21
  correo: string = "etrejoa1801@alumno.ipn.mx"
}
