import { Pipe, PipeTransform } from '@angular/core';
import { ConstantsService } from './services/constants.service';
import { EmployeeService } from './services/employee.service';

@Pipe({
  name: 'employeeFilter'
})

export class SearchPipe implements PipeTransform {

  constructor(public _constantsService: ConstantsService, public _employeeService: EmployeeService) {
    
  }

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.firstName.toLocaleLowerCase().includes(args)) || (val.lastName.toLocaleLowerCase().includes(args)) || (val.email.toLocaleLowerCase().includes(args)) || (val.dob.toLocaleLowerCase().includes(args));
      console.log(rVal);
      return rVal;
    })
  }
}
