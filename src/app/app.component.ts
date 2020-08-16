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

  constructor(private apiTestService: ApiTestService) {
  }

  ngOnInit() {
  }

  createUser() {

    const user = new User()

    user.firstName = "test"
    user.lastName = "lastname"

    this.apiTestService.createUser(user).subscribe((res)=>{
      console.log(res);
    });
  }

  getUsers() {
    this.apiTestService.getUsers().subscribe((res)=>{
      console.log(res);
    });
  }


}
