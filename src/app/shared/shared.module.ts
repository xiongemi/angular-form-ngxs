import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AddressFormComponent } from './address-form/address-form.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, TranslateModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AddressFormComponent],
  exports: [AddressFormComponent, MaterialModule, TranslateModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
