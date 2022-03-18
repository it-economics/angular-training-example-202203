import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'weather', component: WeatherComponent },
      { path: 'reactive', component: ReactiveFormComponent },
      { path: 'template', component: TemplateDrivenFormComponent },
      // { path: '**', redirectTo: 'weather' },
    ],
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModuleModule {}
