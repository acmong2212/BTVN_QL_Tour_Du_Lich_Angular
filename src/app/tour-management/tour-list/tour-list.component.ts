import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tourList: Tour[] = []

  constructor(private tourService: TourService) {
    this.tourList = tourService.tourList
  }

  ngOnInit(): void {
  }

  tour!: Tour;

  showTour(tour: Tour) {
    this.tourService.showTour(tour)
  }
}
