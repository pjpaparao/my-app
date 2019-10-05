import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [{path:'reg',component:RegisterComponent},
{path:'add',component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

