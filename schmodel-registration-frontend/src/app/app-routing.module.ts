import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import { LayoutComponent } from './pages/layout';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
  { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
  { path: 'forgot', loadChildren: './pages/forgot/forgot.module#ForgotModule' },
  { path: 'reset-token', loadChildren: './pages/setpassword/setpassword.module#SetpasswordModule' },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule',
        data: {
          title: 'Home'
        }
      }, {
        path: 'edit-profile',
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
