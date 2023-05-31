import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
})
export class FormulariosComponent {
  titulo: string = '';
  newId: number | undefined = 0;

  tipo: string | null = '';
  id: string | null = '';

  empleado: Persona = new Persona(0, '', '', 0, '');

  nombre = '';
  apellidos = '';
  pass = '';
  telefono = '';

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public personaService: PersonaService
  ) {
    this.tipo = route.snapshot.paramMap.get('tipo');
    if (this.tipo === null) {
      console.log('Modificar');
    } else {
      this.titulo = 'Creando un nuevo ' + this.tipo;
    }

    this.id = route.snapshot.paramMap.get('id');
    if (this.id === null) {
      console.log('Creando');
    } else {
      this.titulo = 'Editando empleado ' + this.id;
      this.empleado = personaService.getEmpleado(parseInt(this.id));
      this.nombre =
        this.empleado.nombre === null ? '' : this.empleado.apellidos.toString();
      this.apellidos =
        this.empleado.apellidos === null
          ? ''
          : this.empleado.apellidos.toString();
      this.telefono =
        this.empleado.telefono === null
          ? ''
          : this.empleado.telefono.toString();
    }
  }

  editEmpleado() {
    this.personaService.editEmpleado(
      parseInt(this.id!),
      new Persona(
        parseInt(this.id!),
        this.nombre,
        this.apellidos,
        parseInt(this.telefono),
        ''
      )
    );

    this.router.navigate(['/listado']);
  }

  addUsuario() {
    this.newId =
      localStorage.getItem('usuarios') === null
        ? 1
        : JSON.parse(localStorage.getItem('usuarios')!).length + 1;

    this.personaService.addUser(
      new Persona(
        this.newId!,
        this.nombre,
        this.apellidos,
        parseInt(this.telefono),
        this.pass
      )
    );

    this.router.navigate(['/']);
  }

  addEmpleado() {
    this.newId =
      localStorage.getItem('empleados') === null
        ? 1
        : JSON.parse(localStorage.getItem('empleados')!).length + 1;

    console.log(this.newId);
    this.personaService.addEmpleado(
      new Persona(
        this.newId!,
        this.nombre,
        this.apellidos,
        parseInt(this.telefono),
        ''
      )
    );

    this.router.navigate(['/listado']);
  }
}
