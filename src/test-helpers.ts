import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Character } from './app/core/models/character';
import { Planet } from './app/core/models/planet';
import { SummaryData } from './app/core/models/summary-data';

export class DataServiceStub {
  getCharacters() { return Observable.of(<Character[]>[]); }
  getPlanets()  { return Observable.of(<Planet[]>[]); }
  getAllegiances() { return Observable.of(<string[]>[]); }
  getPlanetSummary() { return Observable.of(<SummaryData[]>[]); }
  getAllegianceSummary() { return Observable.of(<SummaryData[]>[]); }
}