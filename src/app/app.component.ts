import { Component, OnInit } from '@angular/core';

import { DataService } from './data/data.service';
import { DataPoint } from './data/data-point';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>2015 US Census Data Visualized</h1>
    <div class="visualization">
      <kendo-chart style="height: 1000px">
        <kendo-chart-title
          text="POPULATION ESTIMATE"
          font="2em Roboto, Arial">
        </kendo-chart-title>
        <kendo-chart-series>
          <kendo-chart-series-defaults
            [gap]="0.25">
          </kendo-chart-series-defaults>
          <kendo-chart-series-item
            type="bar"
            [data]="populationData"
            field="population"
            categoryField="state"
            [opacity]="0.7"
            [color]="'#fb9b51'"
            [border]="{ color: '#fb9b51', opacity: 0.3 }">
          </kendo-chart-series-item>
        </kendo-chart-series>
        <kendo-chart-category-axis>
          <kendo-chart-category-axis-item
            [majorGridLines]="{ visible: false }"
            [majorTicks]="{ visible: false }"
            [labels]="{ rotation: '-25' }">
          </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-value-axis>
          <kendo-chart-value-axis-item
            [majorTicks]="{ visible: false }"
            [max]="40000000">
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
      </kendo-chart>
    </div>
    <div class="visualization"></div>
    <div class="visualization"></div>
  `,
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

