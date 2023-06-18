import {Component, OnInit} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'course-management-admin-panel';
  user: SocialUser;

  constructor(private authService: SocialAuthService) {
    this.user = new SocialUser();
  }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
    })
  }
}
