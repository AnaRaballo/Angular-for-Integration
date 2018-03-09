import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneService } from './phone.service'
import { HttpModule } from '@angular/http'

//Routes
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ PhoneService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
