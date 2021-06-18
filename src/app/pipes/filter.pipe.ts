import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(listEmployees: Employee[], nameEmployee: string): Employee[] {
    if(!nameEmployee) 
      return listEmployees

    return listEmployees.filter(
      employee => employee.name.toUpperCase() === nameEmployee.toUpperCase()
    )
  }
}
