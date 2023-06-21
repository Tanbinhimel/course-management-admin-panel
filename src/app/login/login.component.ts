import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import { AES } from 'crypto-js';
import {environment} from "../../environments/environment";
import {concatMap, switchMap, tap} from "rxjs";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private socialAuthService: SocialAuthService, private loginService: LoginService) {
  }

  ngOnInit() {
    // this.socialAuthService.authState.pipe(
    //   switchMap(user => this.loginService.postLogIn(user))
    // ).subscribe(response => {
    //   console.log('user1', response);
    // })


    this.socialAuthService.authState.subscribe((user:SocialUser) => {
      if(user){
        this.loginService.postLogIn(user).subscribe(response => {
          console.log(response);
        })
      }
    })
  }
}
