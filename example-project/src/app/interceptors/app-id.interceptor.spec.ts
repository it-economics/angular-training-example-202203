import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppIdInterceptor } from './app-id.interceptor';

fdescribe('AppIdInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AppIdInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AppIdInterceptor = TestBed.inject(AppIdInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should intercept the request and add AppId to url', (done) => {
    const interceptor: AppIdInterceptor = TestBed.inject(AppIdInterceptor);
    const requestMock: any = {
      url: '/someUrl',
      clone: (req: any) => req,
    };
    const nextMock: any = {
      handle: jest.fn().mockReturnValue(of()),
    };
    interceptor.intercept(requestMock, nextMock).subscribe(() => {
      expect(nextMock.handle).toHaveBeenCalledWith({
        url: '/someUrl&APPID=faf17d6bfe1477a97755d5134779e59c',
      });
      done();
    });
  });
});
