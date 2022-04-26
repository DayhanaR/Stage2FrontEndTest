import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRoutingModule } from './first-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    EditCardComponent,
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class FirstModule { }
