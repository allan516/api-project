import { Component } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css',
})
export class CepComponent {
  cep = new Cep();
  constructor(private cepService: CepService) {}
  buscar() {
    this.cepService
      .buscar(this.cep.cep)
      .then((cep: unknown) => (this.cep = cep as Cep))
      .catch(() => {
        alert('Não foi possível buscar o cep!');
      });
  }
}
