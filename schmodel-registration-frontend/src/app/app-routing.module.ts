import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import { LayoutComponent } from './pages/layout';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'apply-for-jobs',
        canActivate: [AuthGuard],
        loadChildren: './pages/apply-for-jobs/apply-for-jobs.module#ApplyForJobsModule',
        data: {
          title: 'Apply for Jobs',
          navLeft: 'back'
        }
      }
    ]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
  { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
