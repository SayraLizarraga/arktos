import { Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { BolsaTrabajosComponent } from './bolsa-trabajos/bolsa-trabajos.component';

export const routes: Routes = [
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'bolsa-trabajos', component: BolsaTrabajosComponent},

];
