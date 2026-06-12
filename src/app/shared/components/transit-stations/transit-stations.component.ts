import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transit-stations',
  templateUrl: './transit-stations.component.html',
  styleUrls: ['./transit-stations.component.css']
})
export class TransitStationsComponent implements OnInit {

  @Input() transitstations: any[] = [];
  @Input() areaName: string = '';

  showAll: boolean = false;

  ngOnInit(): void {}

  get stationsToShow(): any[] {
    return this.showAll
      ? this.transitstations
      : this.transitstations.slice(0, 6);
  }

toggleViewAll() {
  this.showAll = !this.showAll;
}
}