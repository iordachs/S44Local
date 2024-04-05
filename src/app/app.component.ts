import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { AIsaacNavComponent } from './aisaac-nav/aisaac-nav.component';
import { AIsaacTopbarComponent } from './aisaac-topbar/aisaac-topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    UpperCasePipe,
    AIsaacNavComponent,
    AIsaacTopbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    '[class.sidebar-toggled]': 'sidebarToggled === true',
  },
})
export class AppComponent {
  title = 'AIsaacVM';

  public sidebarToggled = false;

  onToggle(toggled: boolean) {
    this.sidebarToggled = toggled;
  }
}
