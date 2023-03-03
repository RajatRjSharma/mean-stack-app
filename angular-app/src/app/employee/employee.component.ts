import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';

declare const M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  //ngoninit
  ngOnInit() {
    this.refreshEmployees();
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form) {
      this.employeeService.postEmployee(form.value).subscribe({
        next: (res) => {
          this.resetForm();
          form.reset();
          this.refreshEmployees();
          M.toast({ html: 'Employee added successfully!', classes: 'rounded' });
        },
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.employeeService.selectedEmployee = new Employee();
  }

  refreshEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (emps: Employee[]) => {
        this.employeeService.employees = emps;
      },
    });
  }

  remove(emp: Employee, form: NgForm) {
    if (emp) {
      this.employeeService.deleteEmployees(emp._id).subscribe({
        next: (emp: Employee[]) => {
          this.resetForm();
          form.reset();
          this.refreshEmployees();
          M.toast({
            html: 'Employee successfully removed !',
            classes: 'rounded',
          });
        },
      });
    }
  }

  edit(emp: Employee) {
    if (emp) {
      this.employeeService.selectedEmployee = { ...emp };
    }
  }

  onEdit(form: NgForm) {
    if (form) {
      this.employeeService.editEmployee(form.value._id, form.value).subscribe({
        next: (res) => {
          this.resetForm();
          form.reset();
          this.refreshEmployees();
          M.toast({
            html: 'Employee details successfully updated !',
            classes: 'rounded',
          });
        },
      });
    }
  }
}
