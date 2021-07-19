import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should by default not be authenticated', () => {
    let isAuth:any;
    service.isAuthenticated().subscribe(isAuthenticated => isAuth = isAuthenticated);
    expect(isAuth).toEqual(false);
  });

  it('should by default not have userName', () => {
    let expectedUserName:any;
    service.getUsername().subscribe(userName => expectedUserName = userName);

    expect(expectedUserName).toBeNull();
  });



  it('should be authenticated when login', () => {
    let isAuth:any;
    let user: string = "user";
    let password: string = "pwd";

    service.loginUser(user,password);
    service.isAuthenticated().subscribe(isAuthenticated => isAuth = isAuthenticated);

    expect(isAuth).toEqual(true);
  });

  it('should get userName when login', () => {
    let expectedUserName:any;
    let userName: string = "user";
    let password: string = "pwd";

    service.loginUser(userName,password);
    service.getUsername().subscribe(userName => expectedUserName = userName);

    expect(userName).toEqual(expectedUserName);
  });


  it('should be authenticated when signup', () => {
    let isAuth:any;
    let user: string = "user";
    let password: string = "pwd";

    service.signUpUser(user,password, password);
    service.isAuthenticated().subscribe(isAuthenticated => isAuth = isAuthenticated);

    expect(isAuth).toEqual(true);
  });

  it('should get userName when signup', () => {
    let expectedUserName:any;
    let userName: string = "user";
    let password: string = "pwd";

    service.signUpUser(userName,password, password);
    service.getUsername().subscribe(userName => expectedUserName = userName);

    expect(userName).toEqual(expectedUserName);
  });


  it('should not be authentified when logout', () => {
    let isAuth:any;
    let user: string = "user";
    let password: string = "pwd";

    service.loginUser(user, password);
    service.isAuthenticated().subscribe(isAuthenticated => isAuth = isAuthenticated);
    service.logoutUser();

    expect(isAuth).toEqual(false);
  });

  it('should empty userName when logout', () => {
    let expectedUserName:any;
    let userName: string = "user";
    let password: string = "pwd";

    service.loginUser(userName,password);
    service.getUsername().subscribe(userName => expectedUserName = userName);
    service.logoutUser();

    expect(expectedUserName).toBeNull();
  });

});
