import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from './cep';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  // buscar(cep: String) {
  //   return new Promise((resolve, reject) => {
  //     this.http
  //       .get(`https://viacep.com.br/ws/${cep}/json/`)
  //       .subscribe((value: any) => {
  //         const data = value as Cep;
  //         resolve(this.recuperarDados(data));
  //       }),
  //       (error: any) => {
  //         reject(error.json());
  //       };
  //   });
  // }

  buscar(cep: String) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
        next: (value: any) => {
          const data = value as Cep;
          resolve(this.recuperarDados(data));
        },
        error: (err: any) => {
          reject(err);
        },
      });
    });
  }

  recuperarDados(cepRes: Cep): Cep {
    let cep = new Cep();

    cep.cep = cepRes.cep;
    cep.logradouro = cepRes.logradouro;
    cep.complemento = cepRes.complemento;
    cep.bairro = cepRes.bairro;
    cep.localidade = cepRes.localidade;
    cep.uf = cepRes.uf;
    console.log(cep);
    return cep;
  }
}
