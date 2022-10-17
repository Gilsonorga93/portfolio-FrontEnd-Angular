import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from '../models/experiencia';


@Component({
  selector: 'app-my-exp',
  templateUrl: './my-exp.component.html',
  styleUrls: ['./my-exp.component.css']
})
export class MyExpComponent implements OnInit {
  @Input()
  experiencia!: Experiencia;
  @Input()
  posicion?: number;

  @Output() eliminarExperience = new EventEmitter();
  @Output() activarEdicion = new EventEmitter();

  constructor() { }

  deleteExperience(){
    this.eliminarExperience.emit(this.posicion);
  }

  editarExperience(){
    this.activarEdicion.emit(this.posicion);
  }

  ngOnInit(): void {
  }

}
