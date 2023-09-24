import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string =
    'http://localhost:9000/members';

  constructor(private httpClient: HttpClient , private authService : AuthService) {}

  // headers : any ;
  ngOnInit(): void {
    // const token =this.authService.getToken();
    // this.headers = {'Authorization' : `Bearer + ${token}`}
  }

  getMember() {
    const token =this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization' : `Bearer ${token}`
    });
    const request = {headers : headers};

    // const headers = {'Authorization' : `Bearer ${token}`}
    return this.httpClient.get<any>("http://localhost:8085/api/v1/insurance/get-all-insurance-data" , request);
  }

  updateMember(member: Member): Observable<any> {
    return this.httpClient.put(this.baseUrl + member.username, member);
  }
}
