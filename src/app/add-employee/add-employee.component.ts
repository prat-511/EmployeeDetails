import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;


  constructor(private employeeService: EmployeeService) { }


  ngOnInit() {
  }


  save ()
  {
    this.employeeService.createEmployee(this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();

  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
