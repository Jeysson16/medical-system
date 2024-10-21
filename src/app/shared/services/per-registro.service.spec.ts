import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { API_SYS_PER_REGISTRO, ENDPOINT_SYS_PER_REGISTRO } from "environments/enviroment.config";

import { PerRegistroService } from "./per-registro.service";

describe("Sys Per Registro Service", () => {
    let perRegistroService: PerRegistroService;
    let httpController: HttpTestingController; //nos permitirá hacer mocking de las peticiones

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PerRegistroService]
        });
        perRegistroService = TestBed.inject(PerRegistroService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify(); //verifica
    });

    it("Creado exitosamente", () => {
        expect(perRegistroService).toBeTruthy();
    });

    it("Debería listar una lista de PerRegistroService", doneFn => {
        //Arrange
        const mockData = { isSuccess: true, lstItem: [{ nConCodigo: 800 }] };

        perRegistroService.getByPagination().subscribe({
            next: (data: any) => {
                expect(data.isSuccess).toBeTrue();
                doneFn();
            }
        });
        //http config
        const url = `${API_SYS_PER_REGISTRO}${ENDPOINT_SYS_PER_REGISTRO.getByPagination}`;
        const req = httpController.expectOne(url); //creamos una variable y obtenemos un request
        req.flush(mockData); //reemplazamos la información por el mockData
        expect(req.request.method).toBe("GET");
    });
});
