import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table-view',
  templateUrl: './user-table-view.component.html',
  styleUrls: ['./user-table-view.component.css']
})
export class UserTableViewComponent {

  users: User[] = [];
  isUsersLoading: boolean = true;
  displayedColumns: string[] = ['id', 'username', 'email', 'isloc', 'action'];


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      // console.log(this.users);

      this.isUsersLoading = false;
    });
  }

  addUser() {
    this.router.navigate(['add-user'])
  }

  viewUser(userId: number) {
    const res = alert("Do you wanna open ?");
    if (userId) {
      console.log('Ok');
    } else {
      console.log('No OK');
    }
  }

  editUser(userId: number) {
    const res = alert("Do you wanna edit ?");
    if (userId) {
      console.log('Ok');
    } else {
      console.log('No OK');
    }
  }


  deleteUser(userId: number) {
    const res = alert("Do you wanna delete ?");
    if (userId) {
      console.log('Ok');
    } else {
      console.log('No OK');
    }
  }


}
