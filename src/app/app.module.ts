import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    ChildComponent,
    RegisterComponent,
    AddressComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
