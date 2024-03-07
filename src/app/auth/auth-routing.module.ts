import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importa los componentes que deseas enrutador

const routes: Routes = [
  // Define tus rutas aquí
  // Ejemplo: { path: 'ruta', component: NombreComponente }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
