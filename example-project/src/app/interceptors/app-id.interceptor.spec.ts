import { TestBed } from '@angular/core/testing';
import { AppIdInterceptor } from './app-id.interceptor';

describe('AppIdInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AppIdInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AppIdInterceptor = TestBed.inject(AppIdInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should intercept the request and add AppId to url', () => {
    const url = '/someURL';
    const expectedURL = `${url}+AppId`;
    const interceptor: AppIdInterceptor = TestBed.inject(AppIdInterceptor);
    const requestMock: any = {
      url,
      clone: () => ({ url: expectedURL }),
    };
    const nextMock: any = {
      handle: jest.fn(),
    };
    interceptor.intercept(requestMock, nextMock);
    expect(nextMock.handle).toHaveBeenCalledWith({ url: expectedURL });
  });
});
