import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarNotasComponent } from './adicionar-notas.component';

describe('AdicionarNotasComponent', () => {
  let component: AdicionarNotasComponent;
  let fixture: ComponentFixture<AdicionarNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarNotasComponent]
    });
    fixture = TestBed.createComponent(AdicionarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
