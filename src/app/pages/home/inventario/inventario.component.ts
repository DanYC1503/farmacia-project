import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
  selectedCategory: string = '';
  orders = [
    { orderID: 1, nombreCliente: 'John Doe', rucCliente: '1234567890', fechaRealizacion: '2024-01-15', estado: 'ongoing' },
    { orderID: 2, nombreCliente: 'Jane Smith', rucCliente: '0987654321', fechaRealizacion: '2024-02-10', estado: 'completed' },
    { orderID: 3, nombreCliente: 'Alice Johnson', rucCliente: '1111111111', fechaRealizacion: '2024-03-05', estado: 'ongoing' },
    // Add more orders as needed
  ];
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
