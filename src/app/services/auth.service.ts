import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string =
    'http://localhost:9000/';
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    Auth.currentAuthenticatedUser()
      .then(() => this.loggedIn.emit(true))
      .catch(() => {});
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
     
      console.log("username :" + username)
      console.log("password :" + password)
      await this.httpClient.post(`http://localhost:9000/login` , {username , password}).subscribe();
      // await Auth.signIn(username, password);
      this.loggedIn.emit(true);
      return true;
    } catch (err) {
      return false;
    }
  }

  async register(
    username: string,
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      // await Auth.signUp({ username, password, attributes: { email } });
      // this.httpClient.post(this.baseUrl, { username, email }).subscribe();
      console.log(username + " " + email + " " + password)
      this.httpClient.post(this.baseUrl , {username , email , password}).subscribe()
      return true;
    } catch (err) {
      return false;
    }
  }

  async logout() {
    try {
      await Auth.signOut();
      this.loggedIn.emit(false);
    } catch (err) {
      throw err;
    }
  }

  async getUsername(): Promise<any> {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("current user" + user);
      return user.username;
    } catch (err) {
      return null;
    }
  }
}
