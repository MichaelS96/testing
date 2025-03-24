import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editcard.component.html',
  styleUrl: './editcard.component.scss'
})
export class EditcardComponent {
  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
