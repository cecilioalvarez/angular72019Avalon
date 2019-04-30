import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadodtoComponent } from './listadodto.component';

describe('ListadodtoComponent', () => {
  let component: ListadodtoComponent;
  let fixture: ComponentFixture<ListadodtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadodtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadodtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
