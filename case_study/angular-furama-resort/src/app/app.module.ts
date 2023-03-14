import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilityComponent } from './facility/facility-list/facility.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContentComponent } from './home/content/content.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { CustomerComponent } from './customer/customer-list/customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ContractComponent } from './contract/contract-list/contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    CustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ContractComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
