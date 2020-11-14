import { PermissionBase } from "./permission-base.class";
import { Role } from "./roles";
import { SuperuserPermission } from "./superuser-permission.class";
import { CeoPermission } from "./ceo-permission.class";
import { QaLeaderPermission } from "./qa-leader-permission.class";
import { LaborLeaderPermission } from "./labor-leader-permission.class";
import { EngineerPermission } from "./engineer-permission.class";
import { MetrologistPermission } from "./metrologist-permission.class";
import { TechnicianPermission } from "./technician-permission.class";
import { NewcomerPermission } from "./newcomer-permission.class";
import { GuestPermission } from "./guest-permission.class";

export class PermissionFactory {

  public static instance: PermissionBase;

  private constructor() {}

  public static getInstance() {
    if (this.instance) {
      // console.log("factory instance= " + this.instance.permissions)
      return this.instance;
    } else {
      const role = +localStorage.getItem('role');
      console.log("role= " + role)
      switch (role) {
        case Role.SUPERVISOR:
          this.instance = new SuperuserPermission();
          break;
        case Role.CEO:
          this.instance = new CeoPermission();
          break;
        case Role.QA_LEADER:
          this.instance = new QaLeaderPermission();
          break;
        case Role.LABOR_LEADER:
          this.instance = new LaborLeaderPermission();
          break;
        case Role.ENGINEER:
          this.instance = new EngineerPermission();
          break;
        case Role.METROLOGIST:
          this.instance = new MetrologistPermission();
          break;
        case Role.TECHNICIAN:
          this.instance = new TechnicianPermission();
          break;
        case Role.NEWCOMER:
          this.instance = new NewcomerPermission();
          break;
        case Role.GUEST:
          this.instance = new GuestPermission();
          break;
        default:
          this.instance = new GuestPermission();
      }
    }
  }
}
