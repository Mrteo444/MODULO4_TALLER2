import { Component, inject } from '@angular/core';
import { AutosService } from '../../service/autos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tablaadmin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tablaadmin.component.html',
  styleUrl: './tablaadmin.component.css'
})
export class TablaadminComponent {
  servicio=inject(AutosService)

  auto:any
  ngOnInit(){
    this.servicio.getAutos().subscribe(p=>{
      this.auto=p
    })
  }

  eliminar(id:string){
    this.servicio.dropautos(id).subscribe()
    location.href='admin'

  }
  


}
