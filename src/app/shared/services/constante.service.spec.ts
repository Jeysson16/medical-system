import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Constante } from "@shared/interfaces/IConstante";
import { API_CONSTANTE, ENDPOINT_CONSTANTE } from "environments/enviroment.config";

import { ConstanteService } from "./constante.service";

describe("Constante Service", () => {
    let constanteService: ConstanteService;
    let httpController: HttpTestingController; //nos permitirá hacer mocking de las peticiones

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ConstanteService]
        });
        constanteService = TestBed.inject(ConstanteService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify(); //verifica
    });

    it("Creado exitosamente", () => {
        expect(constanteService).toBeTruthy();
    });

    it("Debería mostrar una constante por id", doneFn => {
        //Arrange
        const mockData = [{ nConCodigo: 1 }] as Constante[];

        //Act
        constanteService.emitirData(mockData);

        const obs = constanteService.getData$().subscribe({
            next: data => {
                //Assert
                expect(data).toBe(mockData);
                doneFn();
            }
        });
        obs.unsubscribe();
    });

    it("Debería listar una lista de constantes", doneFn => {
        //Arrange
        const mockData = { isSuccess: true, lstItem: [{ nConCodigo: 800 }] };

        constanteService.getAll(800).subscribe({
            next: (data: any) => {
                expect(data.isSuccess).toBeTrue();
                doneFn();
            }
        });
        //http config
        const url = `${API_CONSTANTE}${ENDPOINT_CONSTANTE.getByPagination}/800`;
        const req = httpController.expectOne(url); //creamos una variable y obtenemos un request
        req.flush(mockData); //reemplazamos la información por el mockData
        expect(req.request.method).toBe("GET");
    });
});
