import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { Customer } from './customer';
import { Validators } from '@angular/forms/src/validators';

@Component({
  template: `
  <form novalidate #form="ngForm">
      <div class="modal-header">
        <h4 class="modal-title">Add Customer</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <input type="hidden" name="_id" class="form-control" [(ngModel)]="customer._id" #_id="ngModel">
          <input type="hidden" name="isDeleted" class="form-control" [(ngModel)]="customer.isDeleted" #isDeleted="ngModel">
          <div class="form-group row">
              <label for="name" class="col-3 col-form-label">Name</label>
              <div class="col-9">
                <input type="text" name="name" class="form-control" [(ngModel)]="customer.name" #name="ngModel" required>
                <div *ngIf="name.errors?.required && name.touched" class="alert alert-danger">
                        Name is required
                </div>
              </div>
          </div>
          <div class="form-group row">
              <label for="phone" class="col-3 col-form-label">Phone</label>
              <div class="col-9">
                <input type="text" name="phone" ngModel class="form-control">
              </div>
          </div>
          <div class="form-group row">
              <label for="dob" class="col-3 col-form-label">Date of birth</label>
              <div class="col-9">
                <input type="date" name="dob" ngModel class="form-control">
              </div>
          </div>
          <div class="form-group row">
              <label for="address" class="col-3 col-form-label">Address</label>
              <div class="col-9">
                <textarea name="address" [(ngModel)]="customer.address" class="form-control"></textarea>
              </div>
          </div>
          <div class="form-group row">
              <label for="note" class="col-3 col-form-label">Note</label>
              <div class="col-9">
                <textarea name="note" class="form-control" [(ngModel)]="customer.note"></textarea>
              </div>
          </div>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger mr-auto" [hidden]="customer.isDeleted || customer._id === undefined" (click)="delete()">Delete</button>
          <button type="button" class="btn btn-danger mr-auto" [hidden]="!customer.isDeleted" (click)="modal.close(form.value)">Confirm Delete</button>
          <button type="button" class="btn btn-outline-primary" [hidden]="!customer.isDeleted || customer._id === undefined" (click)="cancelDelete()">Cancel Delete</button>
          <button type="button" class="btn btn-outline-secondary" [hidden]="customer.isDeleted" (click)="modal.dismiss()">Close</button>
          <button type="submit" class="btn btn-primary" [hidden]="customer.isDeleted" [class.disabled]="form.valid === false" (click)="form.valid && modal.close(form.value)">Save</button>
      </div>
    </form>
  `
})

export class CustomerModalComponent {
  @Input() 
  customer: Customer;

  constructor(public modal: NgbActiveModal, public changeRef: ChangeDetectorRef) {
  }

  delete() {
    this.customer.isDeleted = true;
  }

  cancelDelete() {
    this.customer.isDeleted = false;
  }
}
