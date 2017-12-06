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
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'event-calendar',
        loadChildren: './pages/event-calendar/event-calendar.module#EventCalendarModule',
        data: {
          title: 'Event Calendar',
          navLeft: 'back'
        }
      },
      {
        path: 'hire-a-schmodel',
        loadChildren: './pages/hire-model/hire-model.module#HireModelModule',
        data: {
          title: ' ',
          navLeft: 'back'
        }
      },
      {
        path: 'talent-profile',
        loadChildren: './pages/profile/profile.module#ProfileModule',
        data: {
          title: 'Schmodel Profile',
          navLeft: 'back'
        }
      },
      {
        path: '',
        loadChildren: './pages/client-home/client-home.module#ClientHomeModule'
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: './pages/profile/profile.module#ProfileModule',
        data: {
          title: 'My Profile',
          navLeft: 'back',
          navRight: 'settings'
        }
      },
      {
        path: 'edit-profile',
        canActivate: [AuthGuard],
        loadChildren: './pages/edit-profile/edit-profile.module#EditProfileModule',
        data: {
          title: 'Edit My Profile',
          navLeft: 'back'
        }
      }, {
        path: 'apply-for-jobs',
        canActivate: [AuthGuard],
        loadChildren: './pages/apply-for-jobs/apply-for-jobs.module#ApplyForJobsModule',
        data: {
          title: 'Apply for Jobs',
          navLeft: 'back'
        }
      }, {
        path: 'my-jobs',
        canActivate: [AuthGuard],
        loadChildren: './pages/my-jobs/my-jobs.module#MyJobsModule',
        data: {
          title: 'My Jobs',
          navLeft: 'back'
        }
      },
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: './pages/home/home.module#HomeModule',

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
