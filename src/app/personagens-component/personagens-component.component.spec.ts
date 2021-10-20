import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensComponentComponent } from './personagens-component.component';

describe('PersonagensComponentComponent', () => {
  let component: PersonagensComponentComponent;
  let fixture: ComponentFixture<PersonagensComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
