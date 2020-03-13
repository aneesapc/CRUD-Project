import { ConstantsService } from './common/services/constants.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'crud';

  constructor( public _constantsService: ConstantsService) {
  }

  onAddNew() {
    this._constantsService.editIndex = null;
    this._constantsService.showCard = 'add';
  }

}
