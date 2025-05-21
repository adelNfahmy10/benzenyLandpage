import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFuelComponent } from './fill-fuel.component';

describe('FillFuelComponent', () => {
  let component: FillFuelComponent;
  let fixture: ComponentFixture<FillFuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillFuelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
