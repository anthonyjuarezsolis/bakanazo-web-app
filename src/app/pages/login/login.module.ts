import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { LoginPageRoutingModule } from './login-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule {}
