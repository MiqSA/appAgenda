import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  baseUrl = 'http://127.0.0.1:8000/'
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<any>{
    return this.http.get(this.baseUrl + 'contacts/',
      {headers: this.httpHeaders});
  };

  getContact(id: string): Observable<any>{
    return this.http.get(this.baseUrl + 'contacts/' + id + '/',
      {headers: this.httpHeaders});
  };

  saveNewContact(contact: { id: number; name: string; phones: { id: number; number: string; }[]; }): Observable<any>{
    return this.http.post(this.baseUrl + 'contacts/', contact,
      {headers: this.httpHeaders});
  };


  
}
