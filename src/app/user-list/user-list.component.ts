import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  @Input()
  hideActions: boolean = false;
  searchTerm: '';
  filterby: string = 'name';
  users=[];
  valueChanges;
  constructor(private _userService: UserService, private _router: Router) {}
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.valueChanges = this._userService
      .getUsers()
      .subscribe((data: Array<object>) => {
        this.users = data;
      });
  }
  deleteUser(uesrID,index) {
    this.users.splice(index, 1);
    // this._userService.deleteUser(uesrID); //Facing issue to get updated array
  }
  updateUser(uesrID) {
    this._router.navigate(["/updateUser", uesrID]);
  }
  ngOnDestroy() {
    this.valueChanges.unsubscribe();
  }
}
