import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "www.google.com";

  angular: boolean = true;

  urlImage = 'https://jjm-upload.s3.amazonaws.com/3dcfa9e8e0d399972408099fb9189921-xbox-series-x-jogos-exclusivos_jar5.jpg'

  texto: string = '';

  textoSalvo: string = ''

  isMouseOver: boolean = false;

  nomeDeCursos: string = 'angular'

  valorInicial = 15;

  getValor() {
    return 1;
  }

  getAngular() {
    return true;
  }

  handleClick() {
    alert('well done!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.texto = (<HTMLInputElement>event.target).value;
  }

  saveValue(text) {
    this.textoSalvo = text
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }



  onMudarValor(event) {
    console.log(event.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
