import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestObservablesComponent } from './test-observables/test-observables.component';



@NgModule({
  declarations: [
    TestObservablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestObservablesComponent
  ]
})
export class ObservablesModule { }
