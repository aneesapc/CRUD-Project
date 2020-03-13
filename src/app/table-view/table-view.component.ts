import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../common/services/employee.service';
import { employeeListModel } from '../employee.model';
import { ConstantsService } from '../common/services/constants.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor( public _employeeService: EmployeeService, public _constantsService: ConstantsService) {
  }

  ngOnInit(): void {
  }

  onEdit(index){
    this._constantsService.showCard = "edit";
    this._constantsService.editIndex = index;
    localStorage.setItem('employee-list', JSON.stringify(this._employeeService.employeeList));
  }

  onDelete(index){
    this._employeeService.employeeList.splice(index, 1);
    localStorage.setItem('employee-list', JSON.stringify(this._employeeService.employeeList));
  }

}
