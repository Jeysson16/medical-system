import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { API_ARCHIVOS } from "environments/enviroment.config";

import { ArchivoService } from "./archivo.service";

describe("Archivo Service", () => {
    let archivoService: ArchivoService;
    let httpController: HttpTestingController; //nos permitirá hacer mocking de las peticiones

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ArchivoService]
        });
        archivoService = TestBed.inject(ArchivoService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify(); //verifica
    });

    it("Should be create", () => {
        expect(archivoService).toBeTruthy();
    });

    it("should show file by id", doneFn => {
        //Arrange
        const mockData = [{ codeFile: "aaaaa" }];

        archivoService.getFileById("5").subscribe({
            next: (data: any) => {
                //Assert
                expect(data.length).toBe(mockData.length);
                doneFn();
            }
        });

        //htpp config
        const url = `${API_ARCHIVOS}/5`;
        const req = httpController.expectOne(url);
        req.flush(mockData);
        expect(req.request.method).toBe("GET");
    });

    it("should create Archivo successfully", doneFn => {
        //Arrange
        const mockRequest: FormData = new FormData();
        const mockData = { isSuccess: true };

        archivoService.insertFiles({ ...mockRequest }).subscribe({
            next: (data: any) => {
                expect(data.isSuccess).toBeTrue();
                doneFn();
            }
        });
        //http config
        const url = `${API_ARCHIVOS}`;
        const req = httpController.expectOne(url); //creamos una variable y obtenemos un request
        req.flush(mockData); //reemplazamos la información por el mockData
        expect(req.request.method).toBe("POST");
    });
});
