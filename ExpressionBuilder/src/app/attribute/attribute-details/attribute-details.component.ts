import { Component, OnInit } from '@angular/core';
import {AttributeService} from "../attribute.service";

@Component({
  selector: 'app-attribute-details',
  templateUrl: './attribute-details.component.html',
  styleUrls: ['./attribute-details.component.css']
})
export class AttributeDetailsComponent implements OnInit {

  attributeDetails=
    [{name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"},
    {name:'PICO',description:"Value informrd from black data"}
    ];
  constructor(private attributeService: AttributeService) { }
  
  ngOnInit() {
    
  }

}
