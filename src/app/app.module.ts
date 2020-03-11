import { EmployeeService } from './common/services/employee.service';
import { ConstantsService } from './common/services/constants.service';
import { DateValidator } from './common/date.validator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormViewComponent } from './form-view/form-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableViewComponent } from './table-view/table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FormViewComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [DateValidator, ConstantsService, EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
