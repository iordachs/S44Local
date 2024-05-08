import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNewCompanyComponent } from './add-edit-new-company.component';

describe('AddEditNewCompanyComponent', () => {
  let component: AddEditNewCompanyComponent;
  let fixture: ComponentFixture<AddEditNewCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditNewCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditNewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
