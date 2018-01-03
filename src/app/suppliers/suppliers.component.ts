import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Supplier } from './supplier';

@Component({
  selector: 'suppliers',
  templateUrl: 'suppliers.component.html',
  styleUrls: ['suppliers.component.scss']
})

export class SuppliersComponent {
  customers = [];
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
