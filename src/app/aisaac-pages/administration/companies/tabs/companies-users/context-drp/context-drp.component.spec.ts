import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextDrpComponent } from './context-drp.component';

describe('ContextDrpComponent', () => {
  let component: ContextDrpComponent;
  let fixture: ComponentFixture<ContextDrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextDrpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContextDrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
