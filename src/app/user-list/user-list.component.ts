import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userListArray :any = [];

  constructor(private userList:UserListService) { }

  ngOnInit(): void {
    this.userList.getUserList().subscribe((res)=>{
      this.userListArray = res;
      console.log(this.userListArray);
    })

  }

}
