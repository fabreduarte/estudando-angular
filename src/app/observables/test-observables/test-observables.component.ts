import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.css']
})
export class TestObservablesComponent implements OnInit {

  constructor() { }

  nomes: string[] = ["Carlos"];

  obs: Observable<string[]> = new Observable(
    (observer: Observer<string[]>) => {
      let backEndDados: string[] = ["Gabriel", "Brenda", "Daniel"]
      observer.next(backEndDados);
      observer.error("Deu Ruim!");
      observer.complete();
    });

  ngOnInit(): void {
    this.obs.subscribe((dado: string[]) => {
      setTimeout(() => {
        this.nomes = dado;
      }, 2000);
    },
      error => {
        console.log(error)
      },
      () => {
        console.log("Foi")
      }
    );
  }
}
