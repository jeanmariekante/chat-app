import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {
  MatButtonModule, MatMenuModule, MatSlideToggleModule,
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, MatButtonModule, MatMenuModule,
    MatSlideToggleModule, BrowserAnimationsModule, FormsModule,
    MatInputModule, MatFormFieldModule,
  ],
  declarations: [AppComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
