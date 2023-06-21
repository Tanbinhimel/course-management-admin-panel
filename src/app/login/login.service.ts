import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AES} from "crypto-js";
import {environment} from "../../environments/environment";
import {SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  postLogIn(user: SocialUser){
    const encryptedIdToken = AES.encrypt(user.idToken, environment.cryptoJs.secretKey).toString();
    const authUrl = environment.apiUrl.auth;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${encryptedIdToken}`);
    console.log('idToken:', user.idToken)
    console.log('encryptedIdToken:', encryptedIdToken)
    return this.httpClient.post(`${authUrl}/google`, {userType: 'ADMIN'}, {headers});
  }
}
