import { Injectable } from '@angular/core';
import { PermissionBase } from './permission-base.class';
import { PermissionType } from './permission-type';
import { PermissionFactory } from './permission-factory.class';
import { Role } from './roles';

@Injectable({
  providedIn: 'root'
})
export class PermissionManagerService {

  private permissions: PermissionBase;
  constructor() { }

  isGranted(permission: PermissionType) {
    // console.log("PermissionFactory.getInstance= " + PermissionFactory.getInstance());
    // console.log("PermissionFactory.getInstance= " + PermissionFactory.getInstance().permissions);
    // console.log("PermissionFactory.getInstance= " + PermissionFactory.getInstance().permissions);
    const permissions = PermissionFactory.getInstance().permissions;
    console.log("permissions= " + permissions);
    for(let perm of permissions) {
      console.log("perm= " + perm)
      let p = perm*(Math.pow(10,6)+1);
      console.log("p=" + p)
      if (p >= permission) {
        return true;
      }
    }
    return false;
  }

  authAs(role: Role) {
    localStorage.setItem(
      'role',
      (role === null)
        ? Role.GUEST.toString()
        : role.toString()
      );
    this.permissions = PermissionFactory.getInstance();
  }
}
