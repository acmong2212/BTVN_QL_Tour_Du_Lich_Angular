import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-tour-delete',
  templateUrl: './tour-delete.component.html',
  styleUrls: ['./tour-delete.component.css']
})
export class TourDeleteComponent implements OnInit {
  tourList: Tour[] = []

  tour!: Tour

  constructor(private tourService: TourService) {
    this.tour = tourService.tour
  }

  ngOnInit(): void {
  }

  deleteTour(id: number) {
    this.tourService.deleteTour(id);
    alert('Delete Success!')
  }

}
