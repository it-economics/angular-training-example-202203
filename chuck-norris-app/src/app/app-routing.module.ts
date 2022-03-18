import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {JokeComponent} from "./components/joke/joke.component";
import {AuthenticatedGuard} from "./guards/authenticated.guard";

const routes: Routes = [
  {path: '', component: JokeComponent, canActivate:[AuthenticatedGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
