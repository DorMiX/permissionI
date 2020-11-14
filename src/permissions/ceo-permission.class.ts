import { PermissionBase } from "./permission-base.class";
import { PermissionType } from "./permission-type";

export class CeoPermission extends PermissionBase {

  constructor() {
    super();
    this.permissions = [
      PermissionType.CREATE_USER,
      PermissionType.READ_ALL_USER,
      PermissionType.UPDATE_USER,
      PermissionType.DELETE_USER,
      PermissionType.READ_USER_BY_ID,
      PermissionType.DEL_USER_PWD,
      PermissionType.CHG_USER_PWD,

      PermissionType.CREATE_ETALON,
      PermissionType.READ_ALL_ETALON,
      PermissionType.UPDATE_ETALON,
      PermissionType.DELETE_ETALON,
      PermissionType.READ_ETALON_BY_ID,

      PermissionType.CREATE_MINUTES,
      PermissionType.READ_ALL_MINUTES,
      PermissionType.UPDATE_MINUTES,
      PermissionType.DELETE_MINUTES,
      PermissionType.READ_MINUTES_BY_ID,

      PermissionType.CREATE_UCCALCS,
      PermissionType.READ_ALL_UCCALCS,
      PermissionType.UPDATE_UCCALCS,
      PermissionType.DELETE_UCCALCS,
      PermissionType.READ_UCCALCS_BY_ID,

      PermissionType.CREATE_CERTS,
      PermissionType.READ_ALL_CERTS,
      PermissionType.UPDATE_CERTS,
      PermissionType.DELETE_CERTS,
      PermissionType.READ_CERTS_BY_ID,

      PermissionType.CREATE_LOGMAN,
      PermissionType.READ_ALL_LOGMAN,
      PermissionType.UPDATE_LOGMAN,
      PermissionType.DELETE_LOGMAN,
      PermissionType.READ_LOGMAN_BY_ID,
    ];
  }
}
