import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router) { }
  error:string;
  check:boolean=false;
  ngOnInit() {
  }
  onLogin(email,password){
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,password)
      .then((data)=>{
        console.log(data);
        this.router.navigateByUrl('/view')
      }).catch((err)=>{
        console.log(err);
        this.check=true;
        this.error="Wrong username or password"
      })
    
  }
}
