import { TemplateRef, ViewContainerRef, Directive, Input } from "@angular/core";
import { PermissionManagerService } from "./permission-manager.service";
import { PermissionType } from "./permission-type";

@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionsManagerService: PermissionManagerService,
  ) {}

  @Input() set appIsGranted(permission: PermissionType) {
    console.log("appIsGranted= " + permission);
    this.isGranted(permission);
  }

  private isGranted(permission: PermissionType) {
    console.log("isGranted= " + permission)
    if (this.permissionsManagerService.isGranted(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
