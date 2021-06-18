import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Positions } from '../models/positions.interface';

@Injectable()

export class EmployeesService {
  public resultPositions: Positions = {
    positions: []
  }

  get listPositions() {
    return this.resultPositions;
  }

  constructor( private http: HttpClient ) { }

  getPositions (url: string) {
    return this.http.get<Positions>(url)
  }
}
