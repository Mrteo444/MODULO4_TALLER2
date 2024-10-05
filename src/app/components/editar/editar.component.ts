import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutosService } from '../../service/autos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  servicio = inject(AutosService);
  ruta=inject(ActivatedRoute)
  id: any;
  marca: any;
  modelo: any;
  anio: any;
  trans:any;
  imagen:any;

  ngOnInit(){
    this.ruta.params.subscribe(parametro => {
      this.servicio.getautoedit(parametro['idauto']).subscribe(p => {
        this.id=p.idauto;
        this.id = p.id;
        this.modelo=p.modelo
        this.anio=p.anio
        this.marca=p.marca
        this.trans=p.trans
        this.imagen=p.imagen
      })

    })
    
  }




  editar(formulario: any) {
    this.servicio.putauto(formulario.value).subscribe();
    location.href='admin'
  }
  

  


}
