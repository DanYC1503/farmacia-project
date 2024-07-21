import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})
export class FacturasComponent {
  selectedFacturaId: string | null = null;
  factura = {
    id: '',
    fecha: '',
    cliente: '',
    montoTotal: '',
    estado: ''
  };
  facturas = [
    { id: '001', fecha: '2024-07-01', cliente: 'Cliente A', montoTotal: 100, estado: 'Pagado' },
    { id: '002', fecha: '2024-07-02', cliente: 'Cliente B', montoTotal: 200, estado: 'Pendiente' },
    { id: '003', fecha: '2024-07-03', cliente: 'Cliente C', montoTotal: 300, estado: 'Cancelado' }
  ];

  submitFactura() {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor.
    console.log('Factura enviada:', this.factura);
  }
  selectFactura(id: string) {
    this.selectedFacturaId = id;
  }

  deleteFactura() {
    if (this.selectedFacturaId !== null) {
      this.facturas = this.facturas.filter(factura => factura.id !== this.selectedFacturaId);
      this.selectedFacturaId = null;
    }
  }
}
