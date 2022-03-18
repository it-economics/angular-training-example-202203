import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HelloWorldRoutingModule} from './hello-world-routing.module';
import {HelloComponent} from "./components/hello/hello.component";
import {NameInputComponent} from "./components/name-input/name-input.component";
import {TemplateDrivenFormComponent} from "./components/forms/template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./components/forms/reactive-form/reactive-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HelloComponent,
    NameInputComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    HelloWorldRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [TemplateDrivenFormComponent, ReactiveFormComponent]
})
export class HelloWorldModule {
}
