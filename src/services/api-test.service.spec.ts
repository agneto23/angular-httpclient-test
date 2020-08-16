import { TestBed } from '@angular/core/testing';

import { ApiTestService } from './api-test.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

fdescribe('ApiTestService', () => {
  let service: ApiTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        CommonModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });
    service = TestBed.inject(ApiTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
