import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Employee } from '../models/employee.interface';
import { Position } from '../models/position.interface';

@Component({
  selector: 'custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  @Input() employee:Employee = {
    name: '',
    surname: '',
    birthday: '',
    position: ''
  }
  @Input() employeeEdited:Employee = {
    name: '',
    surname: '',
    birthday: '',
    position: ''
  }
  @Input() optionsPosition: Position[] = [];
  @Input() edit:boolean = false
  @Output() addEmployee:EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() editEmployee:EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() closeUpdateForm:EventEmitter<boolean> = new EventEmitter<boolean>();
  
  ngOnInit(): void {
    this.employee = {
      name: '',
      surname: '',
      birthday: '',
      position: ''
    }
  }

  fullDataForm(): boolean {
    if(Object.values(this.employee.name).length && 
    Object.values(this.employee.surname).length && 
    Object.values(this.employee.birthday).length && 
    Object.values(this.employee.position).length)
      return true
    return false
  }

  dataEditForm(): boolean {
    if(Object.values(this.employeeEdited.name).length || 
      Object.values(this.employeeEdited.position).length)
      return true
    return false
  }

  sendEmployee() {
    if(this.edit === false){
      this.addEmployee.emit(this.employee)
      this.employee = {
        name: '',
        surname: '',
        birthday: '',
        position: ''
      }
    }else {
      this.editEmployee.emit(this.employeeEdited)
      this.employeeEdited = {
        name: '',
        surname: '',
        birthday: '',
        position: ''
      }
    }
  }

  closeForm() {
    this.closeUpdateForm.emit(true)
  }
}
