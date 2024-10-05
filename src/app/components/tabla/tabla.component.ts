import { Component, inject } from '@angular/core';
import { AutosService } from '../../service/autos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio=inject(AutosService)

  auto:any
  ngOnInit(){
    this.servicio.getAutos().subscribe(p=>{
      this.auto=p
    })
  }



}
