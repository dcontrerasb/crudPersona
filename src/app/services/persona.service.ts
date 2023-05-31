import { Injectable } from '@angular/core';
import { Persona } from '../class/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor() {}

  getUsuarios() {}

  addUser(person: Persona) {}

  getEmpleados() {}

  addEmpleado(person: Persona) {}

  editEmpleado(id: number, person: Persona) {}

  deleteEmpleado(id: number) {}
}
