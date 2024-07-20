import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.css'
})
export class InformeComponent {
  medicamentos = [
    { nombre: 'Aspirina', descripcion: 'Analgésico', dosis: '500 mg', precio: '$5', fechaCaducidad: '2024-12-31', stock: 100, stockStatus: 'incoming ship' },
    { nombre: 'Ibuprofeno', descripcion: 'Antiinflamatorio', dosis: '200 mg', precio: '$8', fechaCaducidad: '2025-06-30', stock: 200, stockStatus: 'neutral' },
    // Add more medicamentos as needed
  ];
  orders = [
    { orderID: 1, nombreCliente: 'John Doe', rucCliente: '1234567890', fechaInicio: '2024-01-15', fechaFinal: '2024-06-15' },
    { orderID: 2, nombreCliente: 'Jane Smith', rucCliente: '0987654321', fechaInicio: '2024-02-10', fechaFinal: '2024-07-10' },
    { orderID: 3, nombreCliente: 'Alice Johnson', rucCliente: '1111111111', fechaInicio: '2024-03-05', fechaFinal: '2024-06-23' },
    // Add more orders as needed
  ];
  inventario = [
    { nombre: 'Paracetamol', stock: 50, proveedor: 'Proveedor A', ventas: 30, status: 'Stocked' },
    { nombre: 'Amoxicilina', stock: 10, proveedor: 'Proveedor B', ventas: 50, status: 'Limited' },
    { nombre: 'Loratadina', stock: 0, proveedor: 'Proveedor C', ventas: 20, status: 'Out of stock' },
    // Add more inventario items as needed
  ];
  facturas = [
    { facturaID: 1001, fecha: '2024-07-01', cliente: 'Juan Pérez', montoTotal: 150.00, estado: 'Pagada' },
    { facturaID: 1002, fecha: '2024-07-05', cliente: 'María Gómez', montoTotal: 250.00, estado: 'Pendiente' },
    { facturaID: 1003, fecha: '2024-07-10', cliente: 'Pedro López', montoTotal: 120.00, estado: 'Vencida' },
    { facturaID: 1004, fecha: '2024-07-15', cliente: 'Ana Rodríguez', montoTotal: 300.00, estado: 'Pagada' },
    { facturaID: 1005, fecha: '2024-07-20', cliente: 'Carlos Sánchez', montoTotal: 180.00, estado: 'Pendiente' },
  ];
  selectedCategory: string = '';
  filters: { [key: string]: boolean } = {
    dosis: false,
    price: false,
    endDate: false
  };

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
  }

  onFilterChange(event: Event, filter: 'dosis' | 'price' | 'endDate') {
    const target = event.target as HTMLInputElement;
    this.filters[filter] = target.checked;
  }
}
