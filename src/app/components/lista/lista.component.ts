import { Component } from '@angular/core';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  nombre = '';
  edad = 0;
  correo = '';
  telefono = '';
  direccion = '';
  fechaNac = new Date();
  people: Persona[] = [];
  deletedPeople: Persona[] = [];

  addPerson(): void {
    if (
      this.nombre !== null &&
      this.edad !== null &&
      this.correo !== null &&
      this.telefono !== null &&
      this.direccion !== null &&
      this.fechaNac !== null
    ) {
      this.people.push(
        new Persona(
          this.nombre,
          this.edad,
          this.correo,
          this.telefono,
          this.direccion,
          this.fechaNac
        )
      );
      this.nombre = '';
      this.edad = 0;
      this.correo = '';
      this.telefono = '';
      this.direccion = '';
      this.fechaNac = new Date();

    } else {
      alert('Por favor, complete todos los campos');
    }
  }

  removePerson(person: Persona): void {
    const index = this.people.indexOf(person);
    if (index !== -1) {
      this.people.splice(index, 1);
      this.deletedPeople.push(person);
    }
  }
}
