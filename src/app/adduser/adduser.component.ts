import { Component, OnInit } from "@angular/core";
import { User } from "../model/user.model";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"]
})
export class AdduserComponent implements OnInit {
  user: User = {
    id: null,
    name: null,
    username: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    company: null
  };
  constructor(private _userService: UserService) {}
  ngOnInit() {}
  addUser(userForm) {
    if (userForm.valid) {
      this._userService.createUser(this.user);
    }
  }
  _fnisActionHidden(){
    return true;
  }
}
