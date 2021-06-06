import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/'
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient){ }

  getContact(id: 0): Observable<any>{
    return this.http.get(this.baseUrl + 'contacts/' + id + '/',
      {headers: this.httpHeaders});
  };

  updateContact(contact: { id: number; name: string; phones: { id: number; number: string; }[]; }): Observable<any>{
    return this.http.put(this.baseUrl + 'contacts/' + contact.id + '/', contact,
      {headers: this.httpHeaders});
  };

  deleteContact(id:number): Observable<any>{
    return this.http.delete(this.baseUrl + 'contacts/' + id + '/',
      {headers: this.httpHeaders});
  };
}
