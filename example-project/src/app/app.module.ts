import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { DegreePipe } from './pipes/degree.pipe';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NameInputComponent,
    WeatherComponent,
    DegreePipe,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
