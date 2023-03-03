import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'environment/environment';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  selectedEmployee: Employee = new Employee();
  employees!: Employee[];

  constructor(private http: HttpClient) {}

  postEmployee(emp: Employee) {
    return this.http.post(environment.endpoint + '/', emp);
  }

  getEmployees() {
    return this.http.get<Employee[]>(environment.endpoint + '/');
  }

  editEmployee(id: string, emp: Employee) {
    return this.http.put<Employee[]>(environment.endpoint + '/' + id, emp);
  }

  deleteEmployees(id: string) {
    return this.http.delete<Employee[]>(environment.endpoint + '/' + id);
  }
}
