import { async,TestBed, inject } from '@angular/core/testing';
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { ClipsService } from './clips.service';
import {AppModule} from './app.module';

describe('ClipsService', () => {

  const mockResponse = []; 
  let subject: ClipsService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClipsService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
        ],
        imports: [
        HttpModule,
        AppModule
      ]
    });
  });

  /*it('should ...', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));*/

  it('should construct', async(inject([ClipsService], (service) => {
    expect(service).toBeDefined(); 
  })));

  


});
