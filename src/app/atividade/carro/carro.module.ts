import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroComponent } from './carro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CarroComponent
  ]
})
export class CarroModule { }
