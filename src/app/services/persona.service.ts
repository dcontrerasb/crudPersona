import { Injectable } from '@angular/core';
import { Persona } from '../class/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor() {}

  getUsuarios() {}

  addUser(person: Persona) {}

  getEmpleados() {
    // let clientes = [
    //   new Persona(1, "a", "b", 1),
    //   new Persona(2, "b", "c", 1),
    //   new Persona(3, "c", "d", 1),];
    // localStorage.setItem("empleados", JSON.stringify(clientes));
    let empleadoLocalStorage = JSON.parse(localStorage.getItem("empleados")!);
    let empleados: Array<Persona> = [];
    
    for(let empleado of empleadoLocalStorage) {
      empleados.push(new Persona(empleado.id, empleado.nombre, empleado.apellidos, empleado.telefono));
    }

    return empleados;
  }

  addEmpleado(person: Persona) {}

  editEmpleado(id: number, person: Persona) {}

  deleteEmpleado(id: number) {
    let empleadoLocalStorage = this.getEmpleados();
    let index= empleadoLocalStorage.indexOf(empleadoLocalStorage.filter((i) => i.id === id)[0]);
    if(index == 0){
      empleadoLocalStorage.shift();
    }
    else{
      empleadoLocalStorage.splice(index, index);
    }
    localStorage.setItem("empleados", JSON.stringify(empleadoLocalStorage));
  }
}
