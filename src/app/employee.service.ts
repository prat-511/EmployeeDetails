import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';  
  
  constructor(private http:HttpClient) { }  

  getEmployeeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }
  
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

}
