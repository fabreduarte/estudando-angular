import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  
  public carroLista: Carro[] = [];

  private carroService: CarroService;
  private formBuilder: FormBuilder;

  public form: FormGroup;

  constructor(servico: CarroService, formBuilder: FormBuilder) {
    this.carroService = servico;
    this.formBuilder = formBuilder;

    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      calories: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      color: ['', [Validators.required]],
      fabricated: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.carroLista = this.carroService.findAll();
  }

  searchCarro(carroNome: string): void {
    let search = this.carroService.findCarroName(carroNome);
    if(search.length == 0) {
      this.carroLista = this.carroService.findAll();
    } 
    else {
      this.carroLista = search;
    }
  }

  public addCarro(): void {
    let carro: Carro = this.form.value;
    this.carroService.insert(carro);
  }

  clear(): void {
    this.form.reset();
  }

  erroCampo(input: string): any {
    return {
      'error': (this.form.get(input)?.invalid && this.form.get(input)?.touched)
    }
  }
}
