import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardsListComponent } from './tour-cards-list.component';

describe('TourCardsListComponent', () => {
  let component: TourCardsListComponent;
  let fixture: ComponentFixture<TourCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
