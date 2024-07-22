import { Routes } from '@angular/router';
import { MainNavbarComponent } from './pages/main-navbar/main-navbar.component';
import { InformacionComponent } from './pages/navbar/informacion/informacion.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { MensajeriaComponent } from './pages/home/mensajeria/mensajeria.component';
import { MedicamentoComponent } from './pages/home/medicamento/medicamento.component';
import { InventarioComponent } from './pages/home/inventario/inventario.component';
import { InformeComponent } from './pages/home/informe/informe.component';
import { ProveedorComponent } from './pages/home/proveedor/proveedor.component';
import { ClienteComponent } from './pages/home/cliente/cliente.component';

export const routes: Routes = [
    {path: 'navbar', component: MainNavbarComponent},
    {path: 'informacion', component: InformacionComponent},
    {path: 'home', component: HomeComponent},
    {path: 'home/cliente', component: ClienteComponent},
    {path: 'home/proveedor', component: ProveedorComponent},
    {path: 'home/informe', component: InformeComponent},
    {path: 'home/inventario', component: InventarioComponent},
    {path: 'home/medicamento', component: MedicamentoComponent},
    {path: 'home/mensajeria', component: MensajeriaComponent},
];
