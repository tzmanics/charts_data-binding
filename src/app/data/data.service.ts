import { Injectable } from '@angular/core';

import { POPULATION_DATA } from './population-data';
import { DataPoint } from './data-point';

@Injectable()

export class DataService {
  getPopulationData(): DataPoint[] {
    return POPULATION_DATA;
  }
}

