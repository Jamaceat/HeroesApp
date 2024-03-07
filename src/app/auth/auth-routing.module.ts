import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

// Importa los componentes que deseas enrutador

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },

  // Define tus rutas aquí
  // Ejemplo: { path: 'ruta', component: NombreComponente }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
