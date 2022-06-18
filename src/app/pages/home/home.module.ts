import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";

import { HomePageRoutingModule } from "./home-routing.module";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule,
  ],
  declarations: [HomeComponent],
})
export class HomePageModule {}
