import { ConstantsService } from './../common/services/constants.service';
import { DateValidator } from './../common/date.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../common/services/employee.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {
  employeeForm: FormGroup;

  constructor( private _constantsService: ConstantsService, public _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup ({
      'firstName': new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, this.emailValidator.bind(this)] ),
      'dob' : new FormControl(null, [Validators.required, DateValidator.dateValidator])
   });

   if (this._constantsService.editIndex != null)
   {this.employeeForm.setValue(this._employeeService.employeeList[this._constantsService.editIndex])};
  }

  
  onSave(){
    this._constantsService.showCard = 'save';

    if (this._constantsService.editIndex ==null) {
      this._employeeService.employeeList.push(this.employeeForm.value);
    } else {
      this._employeeService.employeeList[this._constantsService.editIndex] = this.employeeForm.value;
    }

    this._constantsService.editIndex = null;
    localStorage.setItem('employee-list', JSON.stringify(this._employeeService.employeeList));
  }

  onReset(){
    this.employeeForm.reset();
  }

  onExit(){
    this._constantsService.showCard='exit';
    this._constantsService.editIndex = null;  
  };

  emailValidator (control: FormControl) : {[s : string] : boolean} {
    if((this._employeeService.employeeList.some(item => item.email === control.value) 
    && this._constantsService.showCard === 'add')){
      return { 'emailIsForbidden' : true} ;
    }
    return null;
  }

}
