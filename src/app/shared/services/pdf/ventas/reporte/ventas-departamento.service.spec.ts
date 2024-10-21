import { TestBed } from "@angular/core/testing";

import { VentasDepartamentoService } from "./ventas-departamento.service";

describe("VentasDepartamentoService", () => {
    let service: VentasDepartamentoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(VentasDepartamentoService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
