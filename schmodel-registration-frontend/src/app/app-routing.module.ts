import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
    { path: 'forgot', loadChildren: './pages/forgot/forgot.module#ForgotModule' },
    { path: 'reset-token', loadChildren: './pages/setpassword/setpassword.module#SetpasswordModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
