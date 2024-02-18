import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreavaliderComponent } from './offreavalider.component';

describe('OffreavaliderComponent', () => {
  let component: OffreavaliderComponent;
  let fixture: ComponentFixture<OffreavaliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreavaliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreavaliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
