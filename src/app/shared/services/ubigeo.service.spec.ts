import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { API_UBIGEO, ENDPOINT_UBIGEO } from "environments/enviroment.config";

import { UbigeoService } from "./ubigeo.service";

describe("Ubigeo Service", () => {
    let ubigeoService: UbigeoService;
    let httpController: HttpTestingController; //nos permitirá hacer mocking de las peticiones

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UbigeoService]
        });
        ubigeoService = TestBed.inject(UbigeoService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify(); //verifica
    });

    it("Creado exitosamente", () => {
        expect(ubigeoService).toBeTruthy();
    });

    it("Debería mostrar los ubigeos del pais", doneFn => {
        //Arrange
        const mockData = { isSuccess: true, lstItem: [{ nConstValor: 1 }] };

        //Act
        ubigeoService.getCountry().subscribe({
            next: data => {
                //Assert
                expect(data.isSuccess).toBeTrue();
                expect(data).toBe(mockData);
                doneFn();
            }
        });

        //http config
        const url = `${API_UBIGEO}${ENDPOINT_UBIGEO.getUbigeoPais}`;
        const req = httpController.expectOne(url); //creamos una variable y obtenemos un request
        req.flush(mockData); //reemplazamos la información por el mockData
        expect(req.request.method).toBe("GET");
    });
    it("Debería mostrar los ubigeos del departamento por pais", doneFn => {
        //Arrange
        const mockData = { isSuccess: true, lstItem: [{ nConstValor: 5 }] };

        //Act
        ubigeoService.getDepartamentsByCountry(51).subscribe({
            next: data => {
                //Assert
                expect(data.isSuccess).toBeTrue();
                expect(data).toBe(mockData);
                doneFn();
            }
        });

        //http config
        const url = `${API_UBIGEO}${ENDPOINT_UBIGEO.getUbigeoDepartamento}/51/RENIEC`;
        const req = httpController.expectOne(url); //creamos una variable y obtenemos un request
        req.flush(mockData); //reemplazamos la información por el mockData
        expect(req.request.method).toBe("GET");
    });
    it("Debería mostrar los ubigeos de las provincias por departamento", doneFn => {
        //Arrange
        const mockData = { isSuccess: true, lstItem: [{ nConstValor: 6 }] };

        //Act
        ubigeoService.getProvincesByDepartaments("02").subscribe({
            next: data => {
                //Assert
                expect(data.isSuccess).toBeTrue();
                expect(data).toBe(mockData);
                doneFn();
            }
        });

        //http config
        const url = `${API_UBIGEO}${ENDPOINT_UBIGEO.getUbigeoProvincia}/51/02/RENIEC`;
        const req = httpController.expectOne(url); //creamos una variable y obtenemos un request
        req.flush(mockData); //reemplazamos la información por el mockData
        expect(req.request.method).toBe("GET");
    });
    it("Debería mostrar los ubigeos de los distritos por provincia", doneFn => {
        //Arrange
        const mockData = { isSuccess: true, lstItem: [{ nConstValor: 6 }] };

        //Act
        ubigeoService.getDistrictsByProvince("02", "18").subscribe({
            next: data => {
                //Assert
                expect(data.isSuccess).toBeTrue();
                expect(data).toBe(mockData);
                doneFn();
            }
        });

        //http config
        const url = `${API_UBIGEO}${ENDPOINT_UBIGEO.getUbigeoDistrito}/51/18/02/RENIEC`;
        const req = httpController.expectOne(url); //creamos una variable y obtenemos un request
        req.flush(mockData); //reemplazamos la información por el mockData
        expect(req.request.method).toBe("GET");
    });
});
