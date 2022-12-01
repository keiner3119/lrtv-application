import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // user 


  getAppUsers(params): Observable<any> {
    return this.http.get(this.baseUrl + 'superAdmin/user/list', { params: params })
  }

  // dashboard

  // getAppUserCount(): Observable<any> {
  //   return this.http.get(this.baseUrl + 'superAdmin/users/count')
  // }

  // getPromotersCount(): Observable<any> {
  //   return this.http.get(this.baseUrl + 'superAdmin/promoters/count')
  // }
  getAppUserCount(): Observable<any> {
    return this.http.get(this.baseUrl + 'app/amateur/count')
  }

  getPromotersCount(): Observable<any> {
    return this.http.get(this.baseUrl + 'app/promoter/count')
  }
  getBoxerCount(): Observable<any> {
    return this.http.get(this.baseUrl + 'app/boxers/count')
  }

  // category

  saveCategory(data): Observable<any> {
    return this.http.post(this.baseUrl + 'channel-categories', data)
  }

  getCategory(): Observable<any> {
    return this.http.get(this.baseUrl + 'channel-categories')
  }

  deleteCategory(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'channel-categories/' + id)
  }

  // promoters

  savePromoters(data): Observable<any> {
    return this.http.post(this.baseUrl + 'superAdmin/promoter', data)
  }

  getPromoters(params): Observable<any> {
    return this.http.get(this.baseUrl + 'superAdmin/promoter', { params: params })
  }

  updatePromoters(id, data): Observable<any> {
    return this.http.put(this.baseUrl + 'superAdmin/promoter/' + id, data)
  }

  detailPromoter(id): Observable<any> {
    return this.http.get(this.baseUrl + 'superAdmin/promoter/' + id)
  }

  getPromoterEvents(params,id): Observable<any> {
    return this.http.get(this.baseUrl + 'superAdmin/events/admin/'+id, { params: params })
  }

  changePromoterPassword(data): Observable<any> {
    return this.http.put(this.baseUrl + 'superAdmin/change/admin/password',data)
  }

  deletePromoter(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'superAdmin/promoter/' + id)
  }

  // events

  getEvents(params): Observable<any> {
    return this.http.get(this.baseUrl + 'superAdmin/events/lists/requests', { params: params })
  }

  approveEventRequest(id): Observable<any> {
    return this.http.put(this.baseUrl + 'super-admin/approve/event',{event_id:id})
  }

  disapproveEventRequest(data): Observable<any> {
    return this.http.put(this.baseUrl + 'super-admin/disapprove/event',data)
  }

  detailEvents(id): Observable<any> {
    return this.http.get(this.baseUrl + 'channel-event/' + id)
  }

  // contact us 

  getContactUs(): Observable<any> {
    return this.http.get(this.baseUrl + 'contact-us')
  }

  updateContactUs(data): Observable<any> {
    return this.http.put(this.baseUrl + 'contact-us', data)
  }

  // media managers

  saveManager(data): Observable<any> {
    return this.http.post(this.baseUrl + 'superAdmin/mediaManager', data)
  }

  getManagers(params): Observable<any> {
    return this.http.get(this.baseUrl + 'superAdmin/mediaManager', { params: params })
  }

  updateManager(id, data): Observable<any> {
    return this.http.put(this.baseUrl + 'superAdmin/mediaManager/' + id, data)
  }

  detailManager(id): Observable<any> {
    return this.http.get(this.baseUrl + 'superAdmin/mediaManager/' + id)
  }

  deleteManager(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'superAdmin/mediaManager/' + id)
  }

}
