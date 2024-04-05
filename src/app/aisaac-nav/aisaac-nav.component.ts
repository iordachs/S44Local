import { LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { WhitespacePipe } from '../common/pipes/whitespace.pipe';
import { menuItems } from './aisaac-nav.menuitems';
@Component({
  selector: 'app-aisaac-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    FontAwesomeModule,
    NgFor,
    NgIf,
    LowerCasePipe,
    WhitespacePipe,
  ],
  templateUrl: './aisaac-nav.component.html',
  styleUrl: './aisaac-nav.component.scss',
})
export class AIsaacNavComponent implements OnInit {
  @Output() readonly toggled = new EventEmitter<boolean>();
  @Output() readonly hovered = new EventEmitter<boolean>();
  isToggled = false;
  isHovered = false;

  menuData = menuItems;

  toggleSidebar() {
    // reverse the value of property
    this.isToggled = !this.isToggled;
    this.toggled.emit(this.isToggled);
  }

  onMouseEnter() {
    this.isHovered = true;
    this.hovered.emit(this.isHovered);
  }
  onMouseLeave() {
    this.isHovered = false;
    this.hovered.emit(this.isHovered);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log('menu', this.menuData);
  }
}
