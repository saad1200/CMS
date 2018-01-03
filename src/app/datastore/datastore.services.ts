import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './dataService';

@Injectable()
export class CustomersService extends DataService {
  constructor(http: Http) {
    super(http, 'customers');
  }
}

@Injectable()
export class InvoicesService extends DataService {
  constructor(http: Http) {
    super(http, 'invoices');
  }
}

@Injectable()
export class PaymentVouchersService extends DataService {
  constructor(http: Http) {
    super(http, 'payment-vouchers');
  }
}

@Injectable()
export class ReceiptVouchersService extends DataService {
  constructor(http: Http) {
    super(http, 'receipt-vouchers');
  }
}

@Injectable()
export class SuppliersService extends DataService {
  constructor(http: Http) {
    super(http, 'suppliers');
  }
}
