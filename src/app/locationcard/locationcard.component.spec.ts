import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationcardComponent } from './locationcard.component';

describe('LocationcardComponent', () => {
  let component: LocationcardComponent;
  let fixture: ComponentFixture<LocationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
