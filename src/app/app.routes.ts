import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutosComponent } from './pages/autos/autos.component';
import { Error404Component } from './components/error404/error404.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { DetallelsautosComponent } from './pages/detallelsautos/detallelsautos.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditarComponent } from './components/editar/editar.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'autos',component:AutosComponent},
    {path:'form',component:FormularioComponent},
    {path:'tabla',component:TablaComponent},
    {path:'admin',component:AdminComponent},
    { path: 'auto/:idauto', component:DetallelsautosComponent },
    {path:'editar/:idauto',component:EditarComponent},



    {path:'**',component:Error404Component}

];
