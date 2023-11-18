import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerFestivosComponent } from './obtener-festivos.component';

describe('ObtenerFestivosComponent', () => {
  let component: ObtenerFestivosComponent;
  let fixture: ComponentFixture<ObtenerFestivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerFestivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerFestivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
