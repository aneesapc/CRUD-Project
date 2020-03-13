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
  public employeeList: employeeListModel[];

  constructor( public _employeeService: EmployeeService, public _constantsService: ConstantsService) {
    this.employeeList = this._employeeService.employeeList;	
    console.log(this.employeeList);
    console.log(this._employeeService.employeeList);
  }

  ngOnInit(): void {
  }

  onEdit(index){
    this._constantsService.showCard = "edit";
    console.log(index);
    this._constantsService.editIndex = index;
    console.log(this._constantsService.editIndex);
  }

  onDelete(index){
    this._employeeService.employeeList.splice(index, 1);

  }

}
