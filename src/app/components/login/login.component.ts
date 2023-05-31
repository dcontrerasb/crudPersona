import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombre = '';
  pass = '';

  constructor(public router: Router, public personaService: PersonaService) {}

  iniciarSesion() {
    let usuario = this.personaService.getUsuarioByName(this.nombre);
    if (
      this.nombre !== '' &&
      this.pass !== '' &&
      usuario.password === this.pass
    ) {
      this.router.navigate(['/listado']);
    } else {
      alert('Ha habido un fallo en el usuario o la contraseña.');
    }
  }
}
