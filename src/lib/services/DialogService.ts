import Swal, { type SweetAlertOptions, type SweetAlertResult } from "sweetalert2";

export class DialogService {
  static async dialog(config: SweetAlertOptions): Promise<SweetAlertResult> {
    return Swal.fire(config);
  }
}