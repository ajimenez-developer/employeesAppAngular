import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {
  @Input() employees: Employee[] = []
  @Output() editEmployee:EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteEmployee:EventEmitter<number> = new EventEmitter<number>();
  filterpost = undefined;

  constructor() { }

  sendEmployeeIdToEdit(idEmployee: number) {
    this.editEmployee.emit(idEmployee)
  }

  sendEmployeeIdToRemove(idEmployee: number) {
    this.deleteEmployee.emit(idEmployee)
  }
}
