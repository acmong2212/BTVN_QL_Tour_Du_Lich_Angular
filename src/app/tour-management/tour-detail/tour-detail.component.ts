import {Component, OnInit} from '@angular/core';
import {Tour} from "../model/tour";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {

  tour!: Tour

  constructor(private tourService: TourService) {
    this.tour = tourService.tour
  }

  ngOnInit(): void {
  }

}
