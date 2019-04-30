import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiosphereComponent } from './biosphere.component';

describe('BiosphereComponent', () => {
  let component: BiosphereComponent;
  let fixture: ComponentFixture<BiosphereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiosphereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiosphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
