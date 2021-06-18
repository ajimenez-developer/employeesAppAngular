import { Component, OnInit } from '@angular/core';
import { Positions } from '../models/positions.interface';
import { Position } from '../models/position.interface';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../models/employee.interface';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeesService) {
    this.employeeService.getPositions(this.apiPositions).subscribe((res) => {
      this.listPositions = {...res}
      
      for(let i = 0; i < this.listPositions.positions.length; i++) {
        let position: Position = {
          value: i,
          label: this.listPositions.positions[i]
        }

        this.options.push(position);
      }
    })
  }
  private apiPositions: string = 'http://ibillboard.com/api/positions';

  title:string = 'Employees Angular App';
  msg: string = '';
  indexEmployeeEdit:number= 0;
  editForm: boolean= false 
  employee:Employee = {
    name: '',
    surname: '',
    birthday: '',
    position: ''
  }
  filterValue: string = '';
  employees: Employee[] = [];

  listPositions: Positions = {
    positions:[]
  }
  
  options: Position[] = [];

  ngOnInit(): void {

  }

  addEmployee = (newEmployee: Employee):void => {
    this.employees.push(newEmployee);
    this.employee = {
      name: '',
      surname: '',
      birthday: '',
      position: ''
    }
    this.msg = `Welcome to the jungle `+ newEmployee.name
  }

  deleteEmployee = (index: number):void => {
    this.msg = this.employees[index].name+ ` is gone!`
    this.employees.splice(index, 1);
  }

  editEmployee = (index:number):void => {    
    this.editForm = true;
    this.indexEmployeeEdit= index
  }

  updateEmployee = (editedEmployee: Employee):void => {
    let indexEmployee = this.indexEmployeeEdit;

    for(let i = 0; i < this.employees.length; i++) {
      if(indexEmployee === i){
        if(Object.values(editedEmployee.name).length) 
          this.employees[indexEmployee].name = editedEmployee.name;
        if(Object.values(editedEmployee.position).length)
          this.employees[indexEmployee].position = editedEmployee.position;          
      }
    }
    this.editForm = false;
    this.msg = this.employees[indexEmployee].name+ ` we have updated your data!`;
    
  }

  handleSearch = (value: string) => {
    this.filterValue = value
  }

  closeUpdateForm = (show: boolean): void => {
    this.editForm = !show;
  }

  closeAlert = (close: boolean): void => {
    if(close)
      this.msg = "";
  }

}
