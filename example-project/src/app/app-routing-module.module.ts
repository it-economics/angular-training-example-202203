import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)},
      {path: 'hello', loadChildren: () => import('./hello-world/hello-world.module').then(m => m.HelloWorldModule)},
    ],
    canActivate: [AuthGuard],
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModuleModule {
}
