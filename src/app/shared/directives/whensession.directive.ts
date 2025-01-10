import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SessionService } from '../services/session.service';

@Directive({
  selector: '[whenSession]',
  standalone: false
})
export class WhensessionDirective {
  visible = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private sessionService: SessionService) { }

    @Input()
    set whenSession(condition: boolean) {
      if(condition) {
        const isActiveSession = this.sessionService.isActiveSession();
        if(isActiveSession && !this.visible) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.visible = true;
        } else {
          this.viewContainer.clear();
          this.visible = false;
        }
      } else {
        if(!this.visible) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.visible = true;
        } else {
          this.viewContainer.clear();
          this.visible = false;
        }
      }
    }
}
