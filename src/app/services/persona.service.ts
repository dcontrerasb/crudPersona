import { Injectable } from '@angular/core';
import { Persona } from '../class/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor() {}

  getUsuarios() {
    let usuariosLocalStorage = JSON.parse(localStorage.getItem('usuarios')!);
    let usuarios: Array<Persona> = [];

    for (let usuario of usuariosLocalStorage) {
      usuarios.push(
        new Persona(
          usuario.id,
          usuario.nombre,
          usuario.apellidos,
          usuario.telefono,
          usuario.password
        )
      );
    }

    return usuarios;
  }

  addUser(person: Persona) {
    let usuarioLocalStorage = JSON.parse(localStorage.getItem('usuarios')!);
    if (usuarioLocalStorage === null) {
      localStorage.setItem('usuarios', '[]');
      localStorage.setItem('usuarios', JSON.stringify([person]));
    } else {
      usuarioLocalStorage.push(person);
      localStorage.setItem('usuarios', JSON.stringify(usuarioLocalStorage));
    }
  }

  getEmpleados() {
    let empleadoLocalStorage = JSON.parse(localStorage.getItem('empleados')!);
    let empleados: Array<Persona> = [];

    for (let empleado of empleadoLocalStorage) {
      empleados.push(
        new Persona(
          empleado.id,
          empleado.nombre,
          empleado.apellidos,
          empleado.telefono
        )
      );
    }

    return empleados;
  }

  getEmpleado(id: number): Persona {
    let empleadoLocalStorage = JSON.parse(localStorage.getItem('empleados')!);
    let empleado: Persona = new Persona(0, '', '', 0, '');
    empleadoLocalStorage.forEach((element: Persona) => {
      if (element.id === id) {
        empleado = element;
      }
    });
    return empleado;
  }

  getUsuario(id: number): Persona {
    let usuarioLocalStorage = JSON.parse(localStorage.getItem('usuarios')!);
    let usuario: Persona = new Persona(0, '', '', 0, '');
    usuarioLocalStorage.forEach((element: Persona) => {
      if (element.id === id) {
        usuario = element;
      }
    });
    return usuario;
  }

  getUsuarioByName(name: string): Persona {
    let usuarioLocalStorage = JSON.parse(localStorage.getItem('usuarios')!);
    let usuario: Persona = new Persona(0, '', '', 0, '');
    usuarioLocalStorage.forEach((element: Persona) => {
      if (element.nombre === name) {
        usuario = element;
      }
    });
    return usuario;
  }

  addEmpleado(person: Persona) {
    let empleadoLocalStorage = JSON.parse(localStorage.getItem('empleados')!);
    if (empleadoLocalStorage === null) {
      localStorage.setItem('empleados', '[]');
      localStorage.setItem('empleados', JSON.stringify([person]));
    } else {
      empleadoLocalStorage.push(person);
      localStorage.setItem('empleados', JSON.stringify(empleadoLocalStorage));
    }
  }

  editEmpleado(id: number, person: Persona) {
    let empleadoLocalStorage = JSON.parse(localStorage.getItem('empleados')!);

    empleadoLocalStorage.forEach((element: Persona, index: number) => {
      if (element.id === id) {
        empleadoLocalStorage[index] = person;
      }
    });

    localStorage.setItem('empleados', JSON.stringify(empleadoLocalStorage));
  }

  deleteEmpleado(id: number) {
    let empleadoLocalStorage = this.getEmpleados();
    let index = empleadoLocalStorage.indexOf(
      empleadoLocalStorage.filter((i) => i.id === id)[0]
    );
    if (index == 0) {
      empleadoLocalStorage.shift();
    } else {
      empleadoLocalStorage.splice(index, index);
    }
    localStorage.setItem('empleados', JSON.stringify(empleadoLocalStorage));
  }
}
