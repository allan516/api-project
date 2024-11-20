import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CepComponent } from './cep/cep.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CepComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'api-project';
}
