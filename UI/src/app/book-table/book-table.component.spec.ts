import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableComponent } from './book-table.component';
import { FilterPipe } from '../filter.pipe';

describe('BookTableComponent', () => {
  let component: BookTableComponent;
  let fixture: ComponentFixture<BookTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookTableComponent,
        FilterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
