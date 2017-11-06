import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import { LayoutComponent } from './pages/layout/layout.component';


const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/my-jobs/my-jobs.module#MyJobsModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     canActivate: [AuthGuard],
    //     children: [
    //       { path: '', loadChildren: './pages/home/home.module#HomeModule' },
    //       { path: 'my-jobs', loadChildren: './pages/my-jobs/my-jobs.module#MyJobsModule' }
    //     ]
    //   },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
