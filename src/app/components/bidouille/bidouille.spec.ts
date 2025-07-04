import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bidouille } from './bidouille';

describe('Bidouille', () => {
  let component: Bidouille;
  let fixture: ComponentFixture<Bidouille>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bidouille]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bidouille);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
