import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePipesComponent } from './componente-pipes.component';

describe('ComponentePipesComponent', () => {
  let component: ComponentePipesComponent;
  let fixture: ComponentFixture<ComponentePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
