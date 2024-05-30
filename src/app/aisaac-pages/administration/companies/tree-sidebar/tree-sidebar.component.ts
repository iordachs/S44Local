import { NestedTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { AddEditNewCompanyComponent } from './add-edit-new-company/add-edit-new-company.component';

interface companyNode {
  name: string;
  id: string;
  children?: companyNode[];
}

const TREE_DATA: companyNode[] = [
  {
    name: 'Eviden',
    id: '15',
    children: [
      {
        name: 'Comcast',
        id: '16',
        children: [
          {
            name: 'Dunkin Donuts',
            id: '1',
            children: [
              { id: '13', name: 'Dunkin Franchise' },
              { id: '14', name: 'Some Company Name' },
            ],
          },
          {
            id: '2',
            name: 'Some Company Name',
          },
        ],
      },
      {
        name: 'HDFC',
        id: '3',
        children: [
          {
            name: 'Some Company Name',
            id: '4',
            children: [
              { id: '5', name: 'Some Company Name' },
              { id: '6', name: 'Some Company Name' },
              { id: '7', name: 'Some Company Name' },
              { id: '8', name: 'Some Company Name' },
            ],
          },
          {
            id: '9',
            name: 'Some Company Name',
          },
          {
            id: '10',
            name: 'Some Company Name',
          },
        ],
      },
      {
        id: '11',
        name: 'Yes Bank',
      },
      {
        id: '12',
        name: 'Axis Bank',
      },
    ],
  },
];

@Component({
  selector: 'app-tree-sidebar',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatProgressBarModule,
    MatTreeModule,
    MatCardModule,
    AddEditNewCompanyComponent,
    FontAwesomeModule,
  ],
  templateUrl: './tree-sidebar.component.html',
  styleUrl: './tree-sidebar.component.scss',
})
export class TreeSidebarComponent {
  faCaretRight = faCaretRight;
  faCaretDown = faCaretDown;
  hover(input: string, id: any) {
    if (input === 'in') {
      console.log(id);
    } else {
      console.log(id);
    }
  }
  hoverOnComp(input: string, id: any) {
    const element = document.getElementById(id);
    if (input === 'in') {
      id = true;
    } else {
      if (element) {
        id = false;
      }
    }
  }
  handleClick() {
    console.log('Icon clicked!');
  }
  treeControl = new NestedTreeControl<companyNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<companyNode>();
  isHovered = false;
  isHoveredOnComp = false;
  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: companyNode) =>
    !!node.children && node.children.length > 0;
  openDialog() {
    this.dialog.open(AddEditNewCompanyComponent, {
      width: '700px',
      data: {},
    });
  }
}
