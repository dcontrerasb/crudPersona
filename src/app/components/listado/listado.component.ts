import { Component } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor(public personaService: PersonaService){
  }

  public persona = [
    new Persona(1, "a", "b", 1),
    new Persona(2, "b", "c", 1),
    new Persona(3, "c", "d", 1),
  ]

  //personaService.getEmpleados()
}
