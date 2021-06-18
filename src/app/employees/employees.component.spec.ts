import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from '../services/employees.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ 
        EmployeesComponent
      ],
      providers: [ 
        EmployeesService 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'employeesApp'`, () => {
    const fixture = TestBed.createComponent(EmployeesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('employeesApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmployeesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header h1').textContent).toContain('Employees Angular App');
  });
});
