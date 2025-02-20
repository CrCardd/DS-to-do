import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: '', component: AuthPageComponent},
    {path: 'register', component: RegisterPageComponent}
];
