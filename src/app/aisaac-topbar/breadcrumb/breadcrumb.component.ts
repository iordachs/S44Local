import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AsyncPipe } from '@angular/common';
import { Breadcrumb } from '../../common/model/breadcrumb';
import { BreadcrumbService } from '../../common/services/breadcrumb.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [AsyncPipe, FontAwesomeModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  faAngleRight = faAngleRight;
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
}
