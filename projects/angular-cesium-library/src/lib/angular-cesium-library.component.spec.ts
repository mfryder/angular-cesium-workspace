import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCesiumLibraryComponent } from './angular-cesium-library.component';

describe('AngularCesiumLibraryComponent', () => {
  let component: AngularCesiumLibraryComponent;
  let fixture: ComponentFixture<AngularCesiumLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCesiumLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCesiumLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
