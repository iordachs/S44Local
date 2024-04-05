import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIsaacTopbarComponent } from './aisaac-topbar.component';

describe('AIsaacTopbarComponent', () => {
  let component: AIsaacTopbarComponent;
  let fixture: ComponentFixture<AIsaacTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIsaacTopbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIsaacTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
