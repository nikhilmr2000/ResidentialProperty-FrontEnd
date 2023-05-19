import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonalreportComponent } from './zonalreport.component';

describe('ZonalreportComponent', () => {
  let component: ZonalreportComponent;
  let fixture: ComponentFixture<ZonalreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonalreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
