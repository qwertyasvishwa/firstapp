import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './xyz/xyz.component';
import { PqrComponent } from './xyz/pqr/pqr.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    XyzComponent,
    PqrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
