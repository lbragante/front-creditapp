import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  cpf: string = '';
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) { }


  ngOnInit() {

  }

  saveUser() {
    this.userService.createUser({
      cpf: this.cpf,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      email: this.email,
      password: this.password
    }).subscribe((user) => {
      console.log(user);
    }, (err) => console.error(err));
  }

}
