import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constante } from "@shared/interfaces/IConstante";
import { ResponseModel } from "app/shared/models/IResponseModel";
import { API_CONSTANTE, ENDPOINT_CONSTANTE } from "environments/enviroment.config";
import { environment } from "environments/environment";
import { Observable, BehaviorSubject, map } from "rxjs";

const api = `${environment.urlBase}/api/Constante`;

@Injectable({
    providedIn: "root"
})
export class ConstanteService {
    private _tiposListaObs$: BehaviorSubject<Constante[]>;

    constructor(private http: HttpClient) {
        this._tiposListaObs$ = new BehaviorSubject<Constante[]>(null);
    }

    emitirData(data: Constante[]): void {
        this._tiposListaObs$.next(data);
    }

    getData$(): Observable<Constante[]> {
        return this._tiposListaObs$.asObservable();
    }

    getAll(nConCodigo: any): Observable<ResponseModel> {
        const url = `${api}/GetByPagination/${nConCodigo}`;
        return this.http.get<ResponseModel>(url).pipe(
            map((element: ResponseModel) => {
                element.lstItem = element.lstItem.filter(cod => cod.nConValor != 0);
                return element;
            })
        );
    }

    getAllDocuments(cPerJurCodigo: string, nCajCodigo: number, nCajAperCodigo: number, nCajAperSecuencia: number): Observable<ResponseModel> {
        const url = `${api}/get_ByCajApertura/${cPerJurCodigo}/${nCajCodigo}/${nCajAperCodigo}/${nCajAperSecuencia}`;
        return this.http.get<ResponseModel>(url).pipe(
            map((element: ResponseModel) => {
                element.lstItem = element.lstItem.filter(cod => cod.nConValor != 0);
                return element;
            })
        );
    }

    getAllSeries(): Observable<ResponseModel> {
        const url = `${api}/GetByPaginationSerie`;
        return this.http.get<ResponseModel>(url).pipe(
            map((element: ResponseModel) => {
                element.lstItem = element.lstItem.filter(cod => cod.nConValor != 0);
                return element;
            })
        );
    }

    getDataByTasa(fechaEmision: string, moneda: number): Observable<ResponseModel> {
        const url = `${API_CONSTANTE}${ENDPOINT_CONSTANTE.getByTasa}/${fechaEmision}/${moneda}/1`;
        return this.http.get<ResponseModel>(url);
    }

    getDataByPersona(): Observable<ResponseModel> {
        const url = `${API_CONSTANTE}${ENDPOINT_CONSTANTE.getByPersona}`;
        return this.http.get<ResponseModel>(url);
    }

    create(estructura): Observable<ResponseModel> {
        const url = `${API_CONSTANTE}${ENDPOINT_CONSTANTE.create}`;
        return this.http.post<ResponseModel>(url, estructura);
    }

    update(estructura: any): Observable<ResponseModel> {
        const url = `${API_CONSTANTE}${ENDPOINT_CONSTANTE.update}`;
        return this.http.put<ResponseModel>(url, estructura);
    }

    deleteById(nConCodigo: number, nConValor: number): Observable<ResponseModel> {
        const url = `${API_CONSTANTE}${ENDPOINT_CONSTANTE.deleteById}`;
        const params = new HttpParams().append("nConCodigo", nConCodigo).append("nConValor", nConValor);
        return this.http.delete<ResponseModel>(url, { params });
    }
}
