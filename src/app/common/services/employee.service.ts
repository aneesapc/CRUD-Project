import { Injectable } from '@angular/core';
import { employeeListModel } from 'src/app/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public localList : any;

  employeeList: employeeListModel[] =   [
    new employeeListModel('Mark', 'Twain', 'mark@mdo.com', '15 May 1980'),
    new employeeListModel('Alex', 'Mathew', 'alex@mdo.com', '22 July 1982'),
    new employeeListModel('Thomas', 'Otto', 'thomas.otto@mdo.com', '26-10-1992'),
    new employeeListModel('Thomas', 'Alex', 'thomas.alex@mdo.com', '26-03-1992'),
    new employeeListModel('Jibin', 'Mathew', 'jibin.mathew@mdo.com', '26-08-1992'),
  ];

  

  constructor() { 
    this.localList=JSON.parse(localStorage.getItem('employee-list'));
    console.log(this.localList+' This is local list');

    if (this.localList !== null)
    {
      this.employeeList = this.localList;
    }
    
    
  }

}

// let myItem = localStorage.getItem('key');
// localStorage.setItem('key2', 'Value');
