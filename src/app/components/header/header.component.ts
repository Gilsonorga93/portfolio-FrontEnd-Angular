import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  list = [
    {
      number: '1',
      name: 'Inicio',
      icon: 'fa-solid fa-house'
    },
    {
      number: '2',
      name: 'Experiencia',
      icon: 'fa-solid fa-address-card'
    },
    {
      number: '3',
      name: 'Educacion',
      icon: 'fa-solid fa-graduation-cap'
    },
    {
      number: '4',
      name: 'Contacto',
      icon: 'fa-solid fa-envelope'
    },
    {
    number: '5',
    name: 'Configuracion',
    icon: 'fa-solid fa-gear'
    }
  ]

}
