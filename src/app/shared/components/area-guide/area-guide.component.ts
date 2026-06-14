import { Component, Input, OnInit } from '@angular/core';
import { AreaGuide } from 'src/app/models/areaguide';

@Component({
  selector: 'app-area-guide',
  templateUrl: './area-guide.component.html',
  styleUrls: ['./area-guide.component.css']
})
export class AreaGuideComponent implements OnInit {
  @Input() areaGuide!: AreaGuide;
  
  constructor() { }

  ngOnInit() {
  }
}
