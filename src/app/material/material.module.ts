import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { OverlayModule } from "@angular/cdk/overlay";
import { MatTableModule } from "@angular/material/table";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatMenuModule } from "@angular/material/menu";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTreeModule } from "@angular/material/tree";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSortModule } from "@angular/material/sort";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";

// eslint-disable-next-line @typescript-eslint/naming-convention
const MaterialComponentsModules = [
  MatIconModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatRadioModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTabsModule,
  MatProgressBarModule,
  OverlayModule,
  MatTableModule,
  ClipboardModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatDividerModule,
  MatToolbarModule,
  MatTreeModule,
  MatStepperModule,
  MatSortModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule,
  MatRippleModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MaterialComponentsModules],
  exports: [...MaterialComponentsModules],
})
export class MaterialModule {}
