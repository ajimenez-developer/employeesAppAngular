// import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  
  it('should create', () => {
    const form = new AppComponent();
    expect(form).toBeTruthy();
  });
});
