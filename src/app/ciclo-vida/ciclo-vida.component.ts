import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor')
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }


  private log(hook: string) {
    console.log(hook);
  }
}
