import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JoinComponent } from "./join/join.component";
import { EditcardComponent } from "./editcard/editcard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, JoinComponent, EditcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gitpushtest';
}
