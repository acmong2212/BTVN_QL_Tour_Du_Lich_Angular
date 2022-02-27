import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './tour-management/header/header.component';
import { TourCreateComponent } from './tour-management/tour-create/tour-create.component';
import { TourUpdateComponent } from './tour-management/tour-update/tour-update.component';
import { TourDeleteComponent } from './tour-management/tour-delete/tour-delete.component';
import { TourDetailComponent } from './tour-management/tour-detail/tour-detail.component';
import { TourManagementComponent } from './tour-management/tour-management.component';
import { TourListComponent } from './tour-management/tour-list/tour-list.component';
import {TourManagementModule} from "./tour-management/tour-management.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourCreateComponent,
    TourUpdateComponent,
    TourDeleteComponent,
    TourDetailComponent,
    TourManagementComponent,
    TourListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TourManagementModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
