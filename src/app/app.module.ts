import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CustomersComponent }   from './customers/customers.component';
import { CustomerModalComponent }   from './customers/customer.modal.component';
import { SuppliersComponent }   from './suppliers/suppliers.component';

import { DataService } from './datastore/dataService';
import { CustomersService } from './datastore/datastore.services';


@NgModule({
  declarations: [
    AppComponent, 
    SideMenuComponent,
    DashboardComponent,
    CustomersComponent,
    SuppliersComponent,
    CustomerModalComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AppRoutingModule,
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  entryComponents: [CustomerModalComponent],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    CustomersService
  ],
  bootstrap: [
    AppComponent, 
    SideMenuComponent
  ]
})
export class AppModule { }
