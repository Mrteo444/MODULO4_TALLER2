import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { TablaadminComponent } from "../../components/tablaadmin/tablaadmin.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TablaadminComponent, FormularioComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
