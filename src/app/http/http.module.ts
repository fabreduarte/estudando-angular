import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FilmsComponent
  ]
})
export class HttpModule { }
