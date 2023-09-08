import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  showingUser = {First_Name : "-",Las_Name : "-" , Email: "-" , isActive : "-" };
  userList = [{First_Name : "Shivang",Las_Name : "Joshi" , Email: "shivang@angular.io" , isActive : true },
  {First_Name : "Abhinav",Las_Name : "Singh" , Email: "abhinav@angular.io" , isActive : true },
  {First_Name : "Parth",Las_Name : "Parth" , Email: "parth@angular.io" , isActive : true },
  {First_Name : "Anshul",Las_Name : "Joshi" , Email: "anshul@angular.io" , isActive : true },
  {First_Name : "Ram",Las_Name : "Prasad" , Email: "prasad@angular.io" , isActive : true }];
 
  showThis(user : any){
    this.showingUser = user;
  }
}
