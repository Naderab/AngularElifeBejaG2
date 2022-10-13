import { Component, OnInit } from '@angular/core';
import { User } from '../core/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList:User[] =[];
  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this._userService.get().subscribe(users =>this.usersList = users)
  }

}
