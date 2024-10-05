import { Component } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

  mover(){
    location.href='form'

  }

}
