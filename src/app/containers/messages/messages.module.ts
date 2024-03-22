import { AlertModule } from '@coreui/angular';
import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    AlertModule
  ],
  exports: [MessagesComponent]
})
export class MessagesModule { }
