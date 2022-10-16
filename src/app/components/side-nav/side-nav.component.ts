import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

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

  constructor() { }

  ngOnInit(): void {
  }

}
