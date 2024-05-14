import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDrpComponent } from './add-new-drp.component';

describe('AddNewDrpComponent', () => {
  let component: AddNewDrpComponent;
  let fixture: ComponentFixture<AddNewDrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewDrpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewDrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
