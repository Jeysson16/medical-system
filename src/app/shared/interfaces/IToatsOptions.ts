import { SweetAlertIcon } from "sweetalert2";

export interface IToatsOptions {
    icon: SweetAlertIcon;
    text?: string;
    number?: number;
    title?: string;
    timer?: number;

    //SweetAlert
    width?: number | string;
}
