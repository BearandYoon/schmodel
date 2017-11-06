import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';


const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
    { path: 'my-jobs', loadChildren: './pages/my-jobs/my-jobs.module#MyJobsModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
