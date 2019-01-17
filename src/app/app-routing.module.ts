import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { AdduserComponent } from "./adduser/adduser.component";
const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'updateUser/:id', component: UpdateUserComponent},
  {path: '', component:DashboardComponent},
  {path: '**',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
