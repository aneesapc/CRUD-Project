import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public showCard: string = '';
  public editIndex: number = null;
  public searchString: any;

  constructor() { }
}
