import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table' ;
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IssuesTableComponent } from './issues-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http'; 

describe('IssuesTableComponent', () => {
  let component: IssuesTableComponent;
  let fixture: ComponentFixture<IssuesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
      ],
      declarations: [ IssuesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
