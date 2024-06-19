import {Component} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validation: {
        messages: {
          required: (error: any, field: FormlyFieldConfig) => "Campo de preenchimento obrigatório",
        },
      },


    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

}
