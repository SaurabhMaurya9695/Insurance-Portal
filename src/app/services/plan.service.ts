import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  baseUrl: string = 'http://localhost:8085/api/v1/claim/get-all-claims-of-users/';

  constructor(private httpClient: HttpClient , private authService : AuthService) {}

  getPlans(): Observable<any> {
    const user = this.authService.getUser();
    return this.httpClient.get<Plan>(`http://localhost:8085/api/v1/claim/get-all-claims-of-users/${user.user_id}`);
  }

  getPlan(id: string): Observable<any> {
    return this.httpClient.get<Plan>(this.baseUrl + id);
  }
}
