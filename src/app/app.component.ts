import { Component } from '@angular/core';
import { employeeListModel } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  employeeList: employeeListModel[] = [
    new employeeListModel('Mark', 'Twain', 'mark@mdo.com', '15 May 1980'),
    new employeeListModel('Alex', 'Mathew', 'alex@mdo.com', '22 July 1982'),
    new employeeListModel('Thomas', 'Otto', 'thomas@mdo.com', '26 March 1992'),
  ]

  constructor() {
    console.log(this.employeeList);
  }

  

}
