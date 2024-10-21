import { Injectable } from "@angular/core";
import * as ipCliente from "public-ip";

@Injectable({
    providedIn: "root"
})
export class IpService {
    async getIpClient(): Promise<string> {
        return await ipCliente.v4();
    }
}
