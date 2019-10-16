import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';  
import { AddEmployeeComponent } from './add-employee/add-employee.component'; 
import { SearchEmployeesComponent } from './search-employees/search-employees.component'; 


const routes: Routes = [
  { path: '', redirectTo: 'view-employee', pathMatch: 'full' },  
  { path: 'view-employee', component: EmployeeListComponent },  
  { path: 'add-employee', component: AddEmployeeComponent },  
  { path: 'search-employee', component: SearchEmployeesComponent },  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
