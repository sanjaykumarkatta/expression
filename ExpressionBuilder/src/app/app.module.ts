import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AttributeComponent} from "./attribute/attribute.component";
import { AttributeSummaryComponent } from './attribute/attribute-summary/attribute-summary.component';
import { AttributeDetailsComponent } from './attribute/attribute-details/attribute-details.component';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ngx-bootstrap';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AttributeService} from "./attribute/attribute.service";
import { ModalModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeSummaryComponent,
    AttributeDetailsComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  
  providers: [AttributeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
