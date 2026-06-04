import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   menuOpen = false;

   openRooms = false;
   openProperty = false;
   openTransit = false;
   openAreas = false;

   toggleMenu(section: string) {

   this.openRooms = false;
   this.openProperty = false;
   this.openTransit = false;
   this.openAreas = false;

   if (section === 'rooms') this.openRooms = true;
   if (section === 'property') this.openProperty = true;
   if (section === 'transit') this.openTransit = true;
   if (section === 'areas') this.openAreas = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
