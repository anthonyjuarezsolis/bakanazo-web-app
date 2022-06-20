import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderComponent } from 'src/app/components/molecules/header/header.component';
import { FooterComponent } from '../../components/molecules/footer/footer.component';
import { LordIconModule } from 'src/app/lord-icon/lord-icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule,
    LordIconModule,
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
})
export class HomePageModule {}
