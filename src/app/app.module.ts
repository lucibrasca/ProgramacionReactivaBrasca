import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsModule } from './students/students.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; 
import { SharedModule } from './shared/shared.module';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StudentsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    SharedModule,
    CdkMenu, 
    CdkMenuItem


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
