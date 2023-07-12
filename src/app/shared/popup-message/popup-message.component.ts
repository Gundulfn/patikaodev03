import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})

export class PopupMessageComponent {

  constructor(private toast: NgToastService){

  }

  public createSuccessMessage(summary: any){
    this.toast.success({ detail: "SUCCESS", summary: summary, duration: 5000, position:'topCenter'});
  }

  public createErrorMessage(summary: any){
    this.toast.error({ detail: "ERROR", summary: summary, duration: 5000, position:'topCenter'});
  }
}
