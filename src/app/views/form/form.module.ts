import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule {
}
