import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToolComponent } from './jsontool.component';

describe('JsontoolComponent', () => {
  let component: JsonToolComponent;
  let fixture: ComponentFixture<JsonToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
