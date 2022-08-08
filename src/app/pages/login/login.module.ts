import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { LoginComponent } from "./login.component";
import { LoginPageRoutingModule } from "./login-routing.module";
import { BakanazoCommonsModule } from "src/app/commons/commons.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginPageRoutingModule, BakanazoCommonsModule],
  exports: [BakanazoCommonsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule {}
