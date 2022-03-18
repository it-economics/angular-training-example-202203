import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppIdInterceptor} from './interceptors/app-id.interceptor';
import {AppRoutingModuleModule} from './app-routing-module.module';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModuleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppIdInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
