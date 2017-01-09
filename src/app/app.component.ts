import { Component, OnInit } from '@angular/core';

import { DataService } from './data/data.service';
import { DataPoint } from './data/data-point';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: 'app.component.html',
  providers: [DataService]
})

export class AppComponent implements OnInit {
  populationData: DataPoint[];

  constructor(private dataService: DataService) {}

  getPopulationData(): void {
    this.populationData = this.dataService.getPopulationData();
  }

  ngOnInit(): void {
    this.getPopulationData();
  }
}

