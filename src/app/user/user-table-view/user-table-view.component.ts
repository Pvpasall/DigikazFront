import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table-view',
  templateUrl: './user-table-view.component.html',
  styleUrls: ['./user-table-view.component.css']
})
export class UserTableViewComponent {

  users: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'email'];


  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
