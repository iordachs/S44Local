import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIsaacNavComponent } from './aisaac-nav.component';

describe('AIsaacNavComponent', () => {
  let component: AIsaacNavComponent;
  let fixture: ComponentFixture<AIsaacNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIsaacNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIsaacNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
