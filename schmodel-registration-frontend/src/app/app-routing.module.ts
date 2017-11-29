import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import { LayoutComponent } from './pages/layout';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'client/login', loadChildren: './pages/client-login/client-login.module#ClientLoginModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
  { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
  { path: 'forgot', loadChildren: './pages/forgot/forgot.module#ForgotModule' },
  { path: 'reset-token', loadChildren: './pages/setpassword/setpassword.module#SetpasswordModule' },
  { path: 'change-password', loadChildren: './pages/changepassword/changepassword.module#ChangepasswordModule' },
  {
    path: 'client',
    canActivate: [AuthGuard],
    loadChildren: './pages/client-home/client-home.module#ClientHomeModule'
  },
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
        path: 'edit-profile',
        canActivate: [AuthGuard],
        loadChildren: './pages/edit-profile/edit-profile.module#EditProfileModule',
        data: {
          title: 'Edit My Profile',
          navLeft: 'back'
        }
      }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
