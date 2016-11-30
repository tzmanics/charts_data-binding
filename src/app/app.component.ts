import { Component } from '@angular/core';

interface Model {
  state: string;
  population: number;
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>2015 US Census Data Visualized</h1>
    <div class="visualization">
      <kendo-chart>
        <kendo-chart-series>
          <kendo-chart-series-item
            type="bar" [data]="populationData"
            field="population" categoryField="state">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    </div>
    <div class="visualization"></div>
    <div class="visualization"></div>
  `
})

export class AppComponent {
  private populationData: Model[] = [{
    "state": "Alaska",
    "population": 738432
  }, {
    "state": "Arizona",
    "population": 6828065
  }, {
    "state": "Arkansas",
    "population": 2978204
  }, {
    "state": "California",
    "population": 39144818
  }, {
    "state": "Colorado",
    "population": 5456574
  }, {
    "state": "Connecticut",
    "population": 3590886
  }, {
    "state": "Delaware",
    "population": 945934
  }, {
    "state": "District of Columbia",
    "population": 672228
  }, {
    "state": "Florida",
    "population": 20271272
  }, {
    "state": "Georgia",
    "population": 10214860
  }, {
    "state": "Hawaii",
    "population": 1431603
  }, {
    "state": "Idaho",
    "population": 1654930
  }, {
    "state": "Illinois",
    "population": 12859995
  }, {
    "state": "Indiana",
    "population": 6619680
  }, {
    "state": "Iowa",
    "population": 3123899
  }, {
    "state": "Kansas",
    "population": 2911641
  },
  { "state": "Kentucky",
    "population": 4425092
  }, {
    "state": "Louisiana",
    "population": 4670724
  }, {
    "state": "Maine",
    "population": 1329328
  }, {
    "state": "Maryland",
    "population": 6006401
  }, {
    "state": "Massachusetts",
    "population": 6794422
  }, {
    "state": "Michigan",
    "population": 9922576
  }, {
    "state": "Minnesota",
    "population": 5489594
  }, {
    "state": "Mississippi",
    "population": 2992333
  }, {
    "state": "Missouri",
    "population": 6083672
  }, {
    "state": "Montana",
    "population": 1032949
  }, {
    "state": "Nebraska",
    "population": 1896190
  }, {
    "state": "Nevada",
    "population": 2890845
  }, {
    "state": "New Hampshire",
    "population": 1330608
  }, {
    "state": "New Jersey",
    "population": 8958013
  }, {
    "state": "New Mexico",
    "population": 2085109
  }, {
    "state": "New York",
    "population": 19795791
  }, {
    "state": "North Carolina",
    "population": 10042802
  }, {
    "state": "North Dakota",
    "population": 756927
  }, {
    "state": "Ohio",
    "population": 11613423
  }, {
    "state": "Oklahoma",
    "population": 3911338
  }, {
    "state": "Oregon",
    "population": 4028977
  }, {
    "state": "Pennsylvania",
    "population": 12802503
  }, {
    "state": "Rhode Island",
    "population": 1056298
  }, {
    "state": "South Carolina",
    "population": 4896146
  }, {
    "state": "South Dakota",
    "population": 858469
  }, {
    "state": "Tennessee",
    "population": 6600299
  }, {
    "state": "Texas",
    "population": 27469114
  }, {
    "state": "Utah",
    "population": 2995919
  }, {
    "state": "Vermont",
    "population": 626042
  }, {
    "state": "Virginia",
    "population": 8382993
  }, {
    "state": "Washington",
    "population": 7170351
  }, {
    "state": "West Virginia",
    "population": 1844128
  }, {
    "state": "Wisconsin",
    "population": 5771337
  }, {
    "state": "Wyoming",
    "population": 586107
  }, {
    "state": "Puerto Rico",
    "population": 3474182
  }];
}
