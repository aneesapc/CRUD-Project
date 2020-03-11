import { ConstantsService } from './../common/services/constants.service';
import { DateValidator } from './../common/date.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {
  public showCard: string;
  employeeForm: FormGroup;

  constructor( private _constant: ConstantsService) {
    this.showCard=this._constant.showCard;	
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup ({
      'firstName': new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'dob' : new FormControl(null, [Validators.required, DateValidator.dateVaidator])
   });
  }

  onSave(){
    this._constant.showCard = 'save';
    console.log(this.employeeForm.value);
   
  }

  onReset(){
    this.employeeForm.reset();
  
  }

  onExit(){
    console.log(this.showCard);
    this.showCard = 'exit';
    console.log(this.showCard);
    this._constant.showCard=this.showCard;
    console.log(this._constant.showCard);
  }

}
