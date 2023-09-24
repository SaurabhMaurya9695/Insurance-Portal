import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FinacialService {

  constructor(private httpClient: HttpClient , private authService : AuthService) {}

  getFinacial() {
    return this.httpClient.get(`http://localhost:8085/api/v1/financial/get-all-financial-service`);
  }

  applyForm(data:any){
    return this.httpClient.post(`http://localhost:8085/api/v1/financial/add-financial-service-application` , data);
  }
}
