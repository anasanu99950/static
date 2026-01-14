import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  show='one'
  name='mohammed anas'
  place='thrissur'
  qualification='BSc Computer Science'
  job='MERN stack developer'
  company='Inmakes'
  userName='';
  email='';
  message='';


  showTabOne(){
    this.show='one'
  }
  showTabTwo(){
    this.show='two'
  }
  showTabThree(){
    this.show='three'
  }


  sendMessage(){
   console.log("Username",this.userName);
    console.log("Username",this.email);
     console.log("Username",this.message);
   
  }
}
