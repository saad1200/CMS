import { CustomerModalComponent } from './customer.modal.component';
import { ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Customer } from './customer';
import { CustomersService } from '../datastore/datastore.services';

@Component({
  selector: 'customers',
  template: `
      <div id="page-wrapper">
      <div class="container-fluid">
          <div class="row">
              <div class="col-lg-12">
                  <div class="panel panel-default">
                      <div class="panel-heading">Customers<button class="btn btn-lg btn-outline-primary fa fa-plus-square-o add" (click)="open()"></button></div>
                      <div class="panel-body">
                          <div class="table-responsive">
                              <table class="table table-striped table-bordered table-hover">
                                  <thead>
                                      <tr>
                                          <th>Name</th>
                                          <th>Phone</th>
                                          <th>Date of birth</th>
                                          <th>Address</th>
                                          <th>Note</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr 
                                        *ngFor="let customer of customers" (click)="open(customer)">
                                            <td>{{customer.name}}</td>
                                            <td>{{customer.phone}}</td>
                                            <td>{{customer.dob}}</td>
                                            <td>{{customer.address}}</td>
                                            <td>{{customer.note}}</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>    
      </div>
    </div>
  `,
  styles: [`
      tbody tr:hover {
        background-color: #ddd;
      }
      
      .panel-heading{
        font-size: 30px;
      }
      
      .add {
        float:right;
      }
  `]
})

export class CustomersComponent {
  customers: Customer[] = [];

  constructor(private modal: NgbModal, private customersService: CustomersService) {
    this.updateCustomers();
  }

  private updateCustomers(){
    this.customersService.getList((customers) =>  this.customers = customers.filter(customer => !customer.isDeleted) );
  }

  open(customer) {    
    const modalRef = this.modal.open(CustomerModalComponent);
    modalRef.componentInstance.customer = customer ? JSON.parse(JSON.stringify(customer)) : new Customer();
    modalRef.result.then(
        (customer) => this.customersService.save(customer, () => this.updateCustomers() ) , 
        (reason) => console.log("reason1") );
  }
}
