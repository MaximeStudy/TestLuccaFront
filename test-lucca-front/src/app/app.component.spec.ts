import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

describe('AppComponent', () => {

  let titleSpy: any;
  let service: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      providers: [
        Title
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Chat application'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Chat application');
  });

  it('should change title', () => {
    titleSpy =
      jasmine.createSpyObj('Title', ['setTitle']);

      titleSpy.setTitle.and.returnValue('hello');

      service = new AppComponent(titleSpy);
      service.ngOnInit();
      expect(titleSpy.setTitle).toHaveBeenCalled();
  });

  it(`should have router outlet`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    var signup = fixture.nativeElement.querySelector('router-outlet');
    expect(signup).not.toEqual(null);
  });

  it(`should have app-navbar in header`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    var signup = fixture.nativeElement.querySelector('header app-navbar');
    expect(signup).not.toEqual(null);
  });

});

