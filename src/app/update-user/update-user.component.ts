import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../model/user.model";
import { UserService } from "../services/user.service";
@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  userID;
  // In Last moment i have missed something so remove type user model. Need to check
  user: any = {
    id: null,
    name: null,
    username: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    company: null
  };
  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private _routeNavigaor: Router
  ) {
    this.userID = route.snapshot.params["id"];

    this._userService.getuserByID(this.userID).subscribe((data) => {
      this.user = data;
      this.user.companyName = this.user.company.name;
      this.user.city = this.user.address.city;
    });
  }
  ngOnInit() {}
  updateUser(userForm) {
    if (userForm.valid) {
      this._userService.updateUser(this.user, this.userID);
      alert('Info Updated, Redirecting to home page')
      this._routeNavigaor.navigate(['/home'])

    }
  }
}
