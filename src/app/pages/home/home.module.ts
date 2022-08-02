import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderComponent } from 'src/app/components/molecules/header/header.component';
import { FooterComponent } from '../../components/molecules/footer/footer.component';
import { DashboardComponent } from '../../components/molecules/dashboard/dashboard.component';
// import { MaterialComponentsComponent } from 'src/app/components/organisms/material-components/material-components.component';
// import { BannerComponent } from 'src/app/components/molecules/banner/banner.component';
// import { SaleComponent } from 'src/app/components/molecules/sale/sale.component';
// import { ProductsComponent } from 'src/app/components/molecules/products/products.component';
// import { TopComponent } from 'src/app/components/molecules/top/top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    // MaterialComponentsComponent,
    // BannerComponent,
    // ProductsComponent,
    // SaleComponent,
    // TopComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
