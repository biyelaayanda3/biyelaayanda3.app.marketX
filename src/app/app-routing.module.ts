import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./Pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./Pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./Pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'frontpage',
    loadChildren: () => import('./Pages/frontpage/frontpage.module').then( m => m.FrontpagePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'buildmate',
    loadChildren: () => import('./Pages/buildmate/buildmate.module').then( m => m.BuildmatePageModule)
  },
  {
    path: 'doorwindows',
    loadChildren: () => import('./Pages/doorwindows/doorwindows.module').then( m => m.DoorwindowsPageModule)
  },
  {
    path: 'placeorders',
    loadChildren: () => import('./Pages/placeorders/placeorders.module').then( m => m.PlaceordersPageModule)
  },
  {
    path: 'promptemail',
    loadChildren: () => import('./Pages/promptemail/promptemail.module').then( m => m.PromptemailPageModule)
  },
  {
    path: 'rooftimber',
    loadChildren: () => import('./Pages/rooftimber/rooftimber.module').then( m => m.RooftimberPageModule)
  },
  {
    path: 'tilefloor',
    loadChildren: () => import('./Pages/tilefloor/tilefloor.module').then( m => m.TilefloorPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./Pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
