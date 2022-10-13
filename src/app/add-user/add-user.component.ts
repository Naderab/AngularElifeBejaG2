import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:User =  new User();
  constructor(private _userService: UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this._userService.add(this.user).subscribe(user=>this.router.navigate(['/users']));
  }
}
