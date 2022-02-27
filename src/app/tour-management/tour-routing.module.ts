import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TourCreateComponent} from "./tour-create/tour-create.component";
import {TourUpdateComponent} from "./tour-update/tour-update.component";
import {TourDeleteComponent} from "./tour-delete/tour-delete.component";
import {TourDetailComponent} from "./tour-detail/tour-detail.component";
import {CommonModule} from "@angular/common";
import {TourListComponent} from "./tour-list/tour-list.component";

const routes: Routes = [
  { path: '', pathMatch: 'full' ,redirectTo: 'tour-list' },
  { path: 'tour-list', component: TourListComponent },
  { path: 'tour-create', component: TourCreateComponent },
  { path: 'tour-update', component: TourUpdateComponent },
  { path: 'tour-delete', component: TourDeleteComponent },
  { path: 'tour-detail', component: TourDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TourRoutingModule { }
