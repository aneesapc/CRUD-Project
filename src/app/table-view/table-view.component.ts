import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../common/services/employee.service';
import { employeeListModel } from '../employee.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  public employeeList: employeeListModel[];

  constructor( private _global: EmployeeService) {
    this.employeeList = this._global.employeeList;	
    console.log(this.employeeList);
    console.log(this._global.employeeList);
  }

  ngOnInit(): void {
  }

}
