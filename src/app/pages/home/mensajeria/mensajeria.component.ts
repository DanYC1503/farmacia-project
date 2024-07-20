import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensajeria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensajeria.component.html',
  styleUrl: './mensajeria.component.css'
})
export class MensajeriaComponent {
  message = {
    name: '',
    email: '',
    text: ''
  };

  sendMessage() {
    // Lógica para enviar el mensaje
    console.log('Mensaje enviado:', this.message);
    alert('Tu mensaje ha sido enviado con éxito.');
    this.message = { name: '', email: '', text: '' }; // Limpiar el formulario después del envío
  }
}
