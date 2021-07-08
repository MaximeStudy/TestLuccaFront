import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let titleSpy: any;
  let service: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
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
});
