import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private socialAuthService: SocialAuthService) {
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe(user => {
      console.log(user);
      if(user){
        this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => console.log(accessToken));
      }
    })
  }
}
