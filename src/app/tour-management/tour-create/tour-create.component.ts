import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {
  tourList: Tour[] = []

  constructor(private tourService: TourService) {
    this.tourList = tourService.tourList
  }

  tour: Tour = new Tour(0, '', 0);
  ngOnInit(): void {
  }

  createTour() {
    this.tourService.create(this.tour);
    alert('Create Success!')
  }
}
