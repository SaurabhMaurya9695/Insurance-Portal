import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string =
    'http://localhost:8085/api/v1/user/register';
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    Auth.currentAuthenticatedUser()
      .then(() => this.loggedIn.emit(true))
      .catch(() => {});
  }

  // async login(email: string, password: string): Promise<boolean> {
  //   try {
     
  //     console.log("username :" + email)
  //     console.log("password :" + password)
  //     await this.httpClient.post(`http://localhost:8085/api/v1/user/login` , {email , password}).subscribe();
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }
  // }

  public login (email : string , password : string){
    return this.httpClient.post(`http://localhost:8085/api/v1/user/login` , {email , password}) ;
  }

  async register(
    username: string,
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      // await Auth.signUp({ username, password, attributes: { email } });
      // this.httpClient.post(this.baseUrl, { username, email }).subscribe();
      
      let first_name = username;
      let last_name = null
      console.log(first_name + " " + last_name + " " + email + " " + password)
      this.httpClient.post(this.baseUrl , {first_name , last_name , email , password}).subscribe()
      return true;
    } catch (err) {
      return false;
    }
  }

  async logout() {
    try {
      await this.DoLocallogout();
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



  // token 
  // /login User's token set to local Storage ;
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //user is login or not -> if user has token means he is login otherwise logout;
  public isLoggedIn() {
    let str = localStorage.getItem('token'); // you can get via token;
    if (str == undefined || str == '' || str == null) {
      return false;
    }
    return true;
  }

  // to logout user , you have to remove the token from local storage ;
  public DoLocallogout() {
    localStorage.removeItem('token');
    localStorage.clear();
    return true;
  }

  //get token from localstorage ;
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userData to localStorage;
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser from localStorage
  public getUser() {
    let usrStr = localStorage.getItem('user');
    if (usrStr != null) {
      return JSON.parse(usrStr); // converted into json object then return
    } else {
      this.logout();
      return null;
    }
  }
}
