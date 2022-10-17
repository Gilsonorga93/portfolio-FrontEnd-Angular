import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Experiencia } from '../../models/experiencia';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public experiencias: Array<Experiencia>;
  public nuevo = false;
  public editar = false;
  public posicionRecibida = Number;


//Variables de ViewChild para crear nuevo viajero

  @ViewChild('cajaNuevoPuesto')
  cajaNuevoPuesto!: ElementRef;
  @ViewChild('cajaNuevoEmpresa')
  cajaNuevoEmpresa!: ElementRef;
  @ViewChild('cajaNuevoFechaInicio')
  cajaNuevoFechaInicio!: ElementRef;
  @ViewChild('cajaNuevoFechaFin')
  cajaNuevoFechaFin!: ElementRef;

  ngOnInit(): void {
  }

  mostrarNuevoFormulario(){
    this.nuevo=true;
  }

  crearExperiencia(){
    var nuevoPue = this.cajaNuevoPuesto.nativeElement.value;
    var nuevoEmp = this.cajaNuevoEmpresa.nativeElement.value;
    var nuevofecfin = this.cajaNuevoFechaFin.nativeElement.value;
    var nuevofecini = this.cajaNuevoFechaInicio.nativeElement.value;

    var experiencia = new Experiencia(
      nuevoPue,
      nuevoEmp,
      nuevofecini,
      nuevofecfin
    )

    this.experiencias.push(experiencia);
  }

  cancelarNuevo(){
    this.nuevo=false;
  }

  //Variables de ViewChild para modificar viajero


  eliminarExperience(){
    /*
    var posicionRecibida = parseInt(event);
    this.experiencias.splice(posicionRecibida, 1);
    */
  }

  editarExperience(event: string){
    
  }

  updateExperiencia(){

  }

  constructor() { 
    this.experiencias = [
      new Experiencia('Full', 'UTN', '12-Dic', '14-Dic'),
      new Experiencia('Mate', 'FRBA', '20-Ene', '01-Oct'),
      new Experiencia('Noob', 'Google', '17-Sep', '30-Ene')
    ]
  }

}
