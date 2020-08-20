import {Component} from '@angular/core';
import {ApiTestService} from '../services/api-test.service';
import {User} from "../model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-httpclient';

  testPrueba = 'test'

  constructor(private apiTestService: ApiTestService) {
  }

  ngOnInit() {
  }

  createUser() {

    const user = new User()

    user.firstName = "test"
    user.lastName = "lastname"

    const numero = 23 + 23;

    this.apiTestService.createUser(user).subscribe((res)=>{
      console.log(res);
    });


    if (user) {

    }

    if (user) {

    }

    if (user) {

    }

    if (user) {

    }

    if (user) {

    }

    if (user) {

    }

    if (user) {

    }

    if (user) {

    }

    if (user) {

    }

    if (user.lastName == 'howdy') {

    }

    if (user) {
      this.doSomething()
    }

  }

  doSomething() {
    for (let i = 0; i < 4; i++) {    // Noncompliant, 4 is a magic number
      console.log(i)
    }
  }


  getUsers() {
    this.apiTestService.getUsers().subscribe((res)=>{
      console.log(res);
    });
  }


}
