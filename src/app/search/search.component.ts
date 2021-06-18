import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { Employee } from '../models/employee.interface';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() employees: Employee[] = [];
  @Output('search') searchEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchEmployee.valueChanges
    .pipe(
      debounceTime(50)
    ).subscribe(value => this.searchEmitter.emit(value))
  }

  searchEmployee = new FormControl('')
}
