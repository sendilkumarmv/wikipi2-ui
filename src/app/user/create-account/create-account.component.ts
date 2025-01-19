import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { IUser } from '../../shared/models/domain-api-models-wrapper';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
  standalone: false
})
export class CreateAccountComponent {
  public createForm: FormGroup;

  /**
   *
   */
  constructor(private formBuilder: FormBuilder,
    private userService: UserService
  ) {

   this.createForm =  this.formBuilder.group(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailid: new FormControl('', [Validators.required])
    }
   );

  }

  createAccount() {
    
    var user: IUser = { 
      firstName: this.createForm.controls['firstName'].value,
      lastName: this.createForm.controls['lastName'].value,
      email: this.createForm.controls['emailid'].value
    };
    this.userService.createAccount(user).subscribe(r => {
      console.log(r);
    });
  }
}
