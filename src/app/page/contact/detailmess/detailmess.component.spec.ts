import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmessComponent } from './detailmess.component';

describe('DetailmessComponent', () => {
  let component: DetailmessComponent;
  let fixture: ComponentFixture<DetailmessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
