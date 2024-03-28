import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = [
    {
        pathMatch: 'full',
        redirectTo: 'login',
        path: ''
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
