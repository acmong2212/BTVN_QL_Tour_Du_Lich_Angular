import {Injectable} from '@angular/core';
import {Tour} from "../model/tour";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() {

  }

  tour!: Tour;

  tourList: Tour[] = [
    new Tour(1, 'Ha Noi', 2000),
    new Tour(2, 'SG', 1500),
  ]

  showTour(tour: Tour) {
    this.tour = tour;
  }

  create(tour: Tour) {
    this.tourList.push(new Tour(tour.id, tour.name, tour.price));
  }

  edit(tour: Tour) {
    for (let i = 0; i < this.tourList.length; i++) {
      if (this.tourList[i].id === tour.id) {
        this.tourList[i] = tour;
      }
    }
  }

  deleteTour(id: number) {
    for (let i = 0; i < this.tourList.length; i++) {
      if (this.tourList[i].id === id) {
        this.tourList.splice(i, 1);
      }
    }
  }
}
