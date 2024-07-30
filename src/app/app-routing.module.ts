import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'electronica', component: ElectronicaComponent },
    { path: 'beterwere', component: BeterwereComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
