import { Component, OnInit } from '@angular/core';

interface personajes {
  id: Number;
  name: String;
  username: String;
  email: String;
}
@Component({
  selector: 'app-manuel',
  templateUrl: './manuel.component.html',
  styleUrls: ['./manuel.component.scss'],
})
export class ManuelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  texto = 'Hola Mundo';

  personaje = { id: 1, name: 'Manuel', age: '25', sex: 'masculino' };
  // personajeJson = JSON.stringify(this.personaje);
}
