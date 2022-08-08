import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

import { HomePageRoutingModule } from "./home-routing.module";
import { HomeContentComponent } from "src/app/commons/components/templates/home-content/home-content.component";
import { BakanazoCommonsModule } from "src/app/commons/commons.module";
@NgModule({
  declarations: [HomeComponent, HomeContentComponent],
  imports: [BakanazoCommonsModule, HomePageRoutingModule],
  exports: [BakanazoCommonsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
