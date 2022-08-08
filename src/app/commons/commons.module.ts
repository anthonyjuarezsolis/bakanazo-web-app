import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { MaterialModule } from "../material/material.module";
import { BakanazoComponents } from "./components";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    IonicModule,
  ],
  declarations: [...BakanazoComponents],
  exports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ...BakanazoComponents,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class BakanazoCommonsModule {}
