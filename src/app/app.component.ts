import { ConstantsService } from './common/services/constants.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'crud';
  public showCard: string;



  constructor( public _constantsService: ConstantsService) {
    // this.showCard=this._constantsService.showCard;	
  }

  onAddNew() {
    this._constantsService.editIndex = null;
    this._constantsService.showCard = 'add';
    // this.showCard = 'add';
    // console.log(this.showCard);
    // this._constantsService.showCard=this.showCard;
  }

 


}
