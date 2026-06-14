import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-areas',
  templateUrl: './compare-areas.component.html',
  styleUrls: ['./compare-areas.component.css']
})
export class CompareAreasComponent implements OnInit {

  @Input() areas: any[] = [];
  @Input() area: any;
  showAll: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  // Remove current area from comparison
  get filteredAreas() {
    return this.areas.filter(
      item => !this.area || item.name !== this.area.name
    );
  }


  // Show first 5 areas initially
  // Show all after clicking View All
  get displayedAreas() {
    const areas = this.filteredAreas;
    return this.showAll
      ? areas
      : areas.slice(0, 5);
  }


  // Toggle View All / Show Less
  toggleViewAll() {
    this.showAll = !this.showAll;
  }
}