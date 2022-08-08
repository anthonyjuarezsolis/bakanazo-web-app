import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { ProductsComponent } from "./products.component";
import { ProductsPageRoutingModule } from "./products-routing.module";
import { BakanazoCommonsModule } from "src/app/commons/commons.module";

@NgModule({
  declarations: [ProductsComponent],
  imports: [BakanazoCommonsModule, ProductsPageRoutingModule],
  exports: [BakanazoCommonsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsPageModule {}
