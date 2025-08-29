import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPreparationComponent } from './interview-preparation.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataSharingService } from '@app/shared/data-sharing.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

describe('InterviewPreparationComponent', () => {
  let component: InterviewPreparationComponent;
  let fixture: ComponentFixture<InterviewPreparationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewPreparationComponent],
      imports: [        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,MatCardModule],
      providers:[DataSharingService],
    });
    fixture = TestBed.createComponent(InterviewPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log("Hello ..................................")
    expect(component).toBeTruthy();
  });
});
