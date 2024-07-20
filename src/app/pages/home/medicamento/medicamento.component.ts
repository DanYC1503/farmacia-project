import { Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-medicamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicamento.component.html',
  styleUrl: './medicamento.component.css'
})
export class MedicamentoComponent {
  searchMed: string = '';
  searchResults: string[] = [];
  medName: string = '';
  medDescription: string = '';
  medDosage: string = '';

  performSearch() {
    // Placeholder for search logic
    const mockResults = ['Aspirin', 'Paracetamol', 'Ibuprofen']; // Example results
    this.searchResults = mockResults.filter(result => result.toLowerCase().includes(this.searchMed.toLowerCase()));
  }

  registerMedication() {
    console.log('New medication registered:', {
      name: this.medName,
      description: this.medDescription,
      dosage: this.medDosage
    });

    // Placeholder for actual registration logic

    // Clear the form
    this.medName = '';
    this.medDescription = '';
    this.medDosage = '';
  }
}
