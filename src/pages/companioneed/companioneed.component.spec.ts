import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanioneedComponent } from './companioneed.component';

describe('CompanioneedComponent', () => {
  let component: CompanioneedComponent;
  let fixture: ComponentFixture<CompanioneedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanioneedComponent]
    });
    fixture = TestBed.createComponent(CompanioneedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
