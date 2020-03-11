import { Injectable } from '@angular/core';
import { employeeListModel } from 'src/app/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: employeeListModel[] = [
    new employeeListModel('Mark', 'Twain', 'mark@mdo.com', '15 May 1980'),
    new employeeListModel('Alex', 'Mathew', 'alex@mdo.com', '22 July 1982'),
    new employeeListModel('Thomas', 'Otto', 'thomas@mdo.com', '26 March 1992'),
  ]
  

  constructor() { }
}
