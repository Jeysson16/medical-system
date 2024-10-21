import { DecimalPipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, SecurityContext } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ConfigText, PDF } from "@shared/interfaces/IPDF";
import { Usuario } from "@shared/interfaces/IUsuario";
import { FichaMatricula } from "@shared/models/IFichaMatricula";
import { API_SYS_FILE_OBS_HUAWEI, ENDPOINT_SYS_FILE_OBS_HUAWEI } from "environments/enviroment.config";

import { jsPDF } from "jspdf";
import autoTable, { CellHook } from "jspdf-autotable";
import moment from "moment";
import { Observable, map, tap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CloudService {
    user: Usuario = JSON.parse(localStorage.getItem("user"));
    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

    viewDocUrl(idFile: string): Observable<SafeUrl> {
        const url = `${API_SYS_FILE_OBS_HUAWEI}${ENDPOINT_SYS_FILE_OBS_HUAWEI.fileByID}`;
        const formData = new FormData();
        formData.append("idFile", idFile);
        return this.http.post(url, formData, { responseType: "blob" }).pipe(
            map((response: Blob) => {
                const objectURL = URL.createObjectURL(response);
                const urlSafe = this.sanitizer.bypassSecurityTrustUrl(objectURL);
                return urlSafe;
            })
        );
    }

    destroyDocUrl(urlImage: SafeUrl): void {
        const url = this.sanitizer.sanitize(SecurityContext.URL, urlImage);
        URL.revokeObjectURL(url);
    }
}
