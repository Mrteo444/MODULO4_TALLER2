import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutosService } from '../../service/autos.service';

@Component({
  selector: 'app-detallelsautos',
  standalone: true,
  imports: [],
  templateUrl: './detallelsautos.component.html',
  styleUrl: './detallelsautos.component.css'
})
export class DetallelsautosComponent {
  constructor(private ruta:ActivatedRoute,private servici:AutosService){ }


  autos:any


  ngOnInit() {
    this.ruta.params.subscribe(params => {
      let id = params['idauto'];

      this.servici.getauto1(id).subscribe(auto => {
        this.autos = auto;
      });
    });
  } 

  
  


}
