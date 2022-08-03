import { Injectable } from '@angular/core';
import { Carro } from './carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private db: Carro[] = [
    {
      id: 1,
      name: "Panamera",
      type: "Esportivo",
      brand: "Porsche",
      color: "Verde Escuro",
      fabricated: "2022-01-01"
    },
    {
      id: 2,
      name: "911",
      type: "Esportivo",
      brand: "Porsche",
      color: "Preto",
      fabricated: "2020-01-01"
    }
  ];

  constructor() { }

  public findAll(): Carro[] {
    return this.db;
  }

  public findCarroName(carroNome: string): Carro[] {
    let search: Carro[] = [];
    for (let carro of this.db) {
      if (carro.name == carroNome) {
        search.push(carro);
      }
    }
    return search;
  }

  public insert(carro: Carro): void {
    carro.id = this.db.length + 1;
    this.db.push(carro);
  }
}
