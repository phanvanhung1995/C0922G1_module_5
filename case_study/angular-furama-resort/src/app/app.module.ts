import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilityComponent } from './facility/facility.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ContractComponent } from './contract/contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';

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
