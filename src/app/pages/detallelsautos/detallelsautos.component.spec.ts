import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallelsautosComponent } from './detallelsautos.component';

describe('DetallelsautosComponent', () => {
  let component: DetallelsautosComponent;
  let fixture: ComponentFixture<DetallelsautosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallelsautosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallelsautosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
