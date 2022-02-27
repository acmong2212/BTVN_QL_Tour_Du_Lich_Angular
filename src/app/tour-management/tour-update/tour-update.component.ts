import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {TourService} from "../service/tour.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tour-update',
  templateUrl: './tour-update.component.html',
  styleUrls: ['./tour-update.component.css']
})
export class TourUpdateComponent implements OnInit {

  tourList: Tour[] = []

  tour!: Tour

  constructor(private tourService: TourService) {
    this.tour = tourService.tour
  }

  ngOnInit(): void {
  }

  editTour(tour: Tour) {
    this.tourService.edit(tour);
    alert('Update Success!')
  }

}
