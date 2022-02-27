import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TourRoutingModule} from "./tour-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TourRoutingModule
  ],
})
export class TourManagementModule { }
