import { Component } from '@angular/core';
import { LobbyService } from 'src/app/lobby/services/lobby.service';
import { Router } from '@angular/router';
import { Lobby } from 'src/app/shared/models/Lobby.model';


@Component({
  selector: 'app-form-create-lobby',
  templateUrl: './form-create-lobby.component.html',
  styleUrls: ['./form-create-lobby.component.scss']
})
export class FormCreateLobbyComponent {
  nombrePartida!: string;

  constructor(private lobbyService: LobbyService, private router: Router) {}

  ngOnInit(): void {
  }

  crearPartida() {
    this.lobbyService.crearLobby(this.nombrePartida).then(

      (respuesta: Lobby|undefined) => {
        if (respuesta){
          localStorage.setItem('nick', this.nombrePartida); // Guardar el nick del usuario en el localStorage
          this.router.navigate(['/lobby/' + respuesta?.codigo]); // Redireccionar a la página del lobby creado
        }

      }

    );
  }
}



