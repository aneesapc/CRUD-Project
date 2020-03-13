import { Injectable } from '@angular/core';
import { employeeListModel } from 'src/app/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public localList : any;

  public employeeList: employeeListModel[] =   [
    new employeeListModel('Mark', 'Otto', 'mark.otto@mdo.com', '26-10-1992'),
    new employeeListModel('Thomas', 'Alex', 'thomas.alex@mdo.com', '26-03-1992'),
    new employeeListModel('Jibin', 'Mathew', 'jibin.mathew@mdo.com', '26-08-1992'),
  ];

  constructor() { 
    this.localList=JSON.parse(localStorage.getItem('employee-list'));
    
    if (this.localList !== null){
      this.employeeList = this.localList;
    }
  }
}

