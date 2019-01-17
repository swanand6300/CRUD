import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UserService } from "./services/user.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { HttpClientModule } from "@angular/common/http";
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from './pipes/user-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UpdateUserComponent,
    AdduserComponent,
    UserListComponent,
    UserFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
