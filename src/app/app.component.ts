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

  constructor( public _global: ConstantsService) {
    this.showCard=this._global.showCard;	
  }

  onAddNew() {
    this.showCard = 'add';
    console.log(this.showCard);
    this._global.showCard=this.showCard;
  }

  

}
