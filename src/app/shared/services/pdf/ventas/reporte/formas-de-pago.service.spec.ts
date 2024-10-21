import { TestBed } from "@angular/core/testing";

import { FormasDePagoService } from "./formas-de-pago.service";

describe("FormasDePagoService", () => {
    let service: FormasDePagoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FormasDePagoService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
