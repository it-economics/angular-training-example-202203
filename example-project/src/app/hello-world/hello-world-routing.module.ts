import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormComponent} from "./components/forms/reactive-form/reactive-form.component";
import {TemplateDrivenFormComponent} from "./components/forms/template-driven-form/template-driven-form.component";

const routes: Routes = [
  {path:'reactive', component: ReactiveFormComponent},
  {path:'template', component: TemplateDrivenFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloWorldRoutingModule { }
