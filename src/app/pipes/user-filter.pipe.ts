import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "userFilter"
})
export class UserFilterPipe implements PipeTransform {
  transform(users, searchTerm: string, filterBy: string) {
    if (!users || !searchTerm) {
      return users;
    }
    if (filterBy == "company") {
      return users.filter(
        user =>
          user.company.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
          -1
      );
    } else if (filterBy == "email") {
      return users.filter(
        user =>
          user.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    } else {
      return users.filter(
        user => user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }
    
  }
}
