import { TemplateRef, ViewContainerRef } from '@angular/core';
import { SessionService } from '../services/session.service';
import { WhensessionDirective } from './whensession.directive';
import { TestBed } from '@angular/core/testing';

describe('WhensessionDirective', () => {
  let whenSessionDirective: WhensessionDirective;
  let sessionService: SessionService;
  let templateRef: TemplateRef<any>;
  let viewContainerRef: ViewContainerRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhensessionDirective],
      imports: [],
      providers: [
        { provide: TemplateRef, useValue: {} },
        { provide: ViewContainerRef, useValue: {} },
        SessionService
      ]
    }).compileComponents();

    sessionService = TestBed.inject(SessionService);
    templateRef = TestBed.inject(TemplateRef);
    viewContainerRef = TestBed.inject(ViewContainerRef);
    whenSessionDirective = new WhensessionDirective(templateRef, viewContainerRef, sessionService);
   });
   
  it('should create an instance', () => {
    expect(whenSessionDirective).toBeTruthy();
  });
});
