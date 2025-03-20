import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JoinComponent } from "./join/join.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, JoinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gitpushtest';
}
