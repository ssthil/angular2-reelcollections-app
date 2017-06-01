import { async,TestBed, inject } from '@angular/core/testing';
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { ClipsService } from './clips.service';
import {AppModule} from './app.module';

describe('ClipsService', () => {

  const mockResponse = [{
    id: 'jswebapps',
    title: 'JS Web Apps',
    description: 'JS Web Apps description here!'
  },
    {
      id: 'android',
      title: 'Android',
      description: 'Android description here!'
    }];

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

  it('readAll should return observable with a []', async(inject(
    [ClipsService], (service) => {
      service.readAll().subscribe(courses => {
        expect(courses[0].id).toBe('gwegw');
        expect(courses[0].title).toBe('JS Web Apps');
        expect(courses[0].description).toBe('JS Web Apps description here!');

      });
    })));

});
