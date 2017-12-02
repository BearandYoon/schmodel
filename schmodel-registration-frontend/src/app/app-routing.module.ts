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
    component:LayoutComponent,
    canActivate: [AuthGuard],
    children: [
     {
        path: 'event-calendar',
        canActivate: [AuthGuard],
        loadChildren: './pages/event-calendar/event-calendar.module#EventCalendarModule',
        data: {
          title: 'Event Calendar',
          navLeft: 'back'
        }
      },
      {
        path: 'hire-schmodel',
        canActivate: [AuthGuard],
        loadChildren: './pages/hire-schmodel/hire-schmodel.module#HireModelModule',
        data: {
          title: 'Hire Schmodel',
          navLeft: 'back'
        }
      },
     {
    	path: 'talent-profile',
        canActivate: [AuthGuard],
        loadChildren: './pages/profile/profile.module#ProfileModule',
        data: {
           title: 'Schmodel Profile',       
           navLeft: 'back'
        }
      },
      {
        path: '',
        canActivate: [AuthGuard],
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
      },
      {
        path: 'my-jobs',
        canActivate: [AuthGuard],
        loadChildren: './pages/my-jobs/my-jobs.module#MyJobsModule',
        data: {
          title: 'My Jobs',
          navLeft: 'back'
        }
      },
     {
        path: 'apply-jobs',
        canActivate: [AuthGuard],
        loadChildren: './pages/apply-jobs/apply-jobs.module#ApplyJobsModule',
        data: {
          title: 'Apply Jobs',
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
