import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosService } from '../../service/autos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  servicio = inject(AutosService)


  id: any
  marca: any
  modelo: any
  anio: any
  trans: any
  imagen:any


  guardar(formulario: any) {
    alert("guardado");
    this.servicio.postAutos(formulario.value).subscribe({
      next: (response) => {
        console.log('Datos guardados con éxito', response);
      },
      error: (error) => {
        console.error('Error al guardar los datos', error);
      }
    });
    this.borrar()
    location.href = 'autos'



  }
  borrar() {
    this.id = '';
    this.marca = '';
    this.modelo = '';
    this.anio = '';
    this.trans = '';
    this.imagen = '';
  }

}
