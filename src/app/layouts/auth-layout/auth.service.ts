import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  adminAuth(adminForm) {
    const headers = { 'Authorization': 'Basic VFY6TFVJU1RWQDEyMw==', 'Content-Type': 'application/x-www-form-urlencoded' }
    var data = "username=" + encodeURIComponent(adminForm.username) +
    "&password=" + encodeURIComponent(adminForm.password) +
    "&grant_type=password&userType=1"
    return this.http.post(this.baseUrl + 'login',data,{ headers });
  }

  refreshToken(quaryData){
    return this.http.post(this.baseUrl + '/auth/refresh-token/',quaryData)
  }
}
