import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  private apiUrl = 'http://localhost:8090/hello';

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<any> {
    console.log("ty wink");
    return this.http.get(this.apiUrl);
  }
}
