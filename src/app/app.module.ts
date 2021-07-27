import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // trying to add the same imports as iqair.come AppModule to understand why reload doesn't return aanyitnh (blank page, with only app-root :(( ))

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
