import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuesTableComponent } from './issues-table/issues-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        HttpClientTestingModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        IssuesTableComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
