import { DynamicComponentDirective } from "./dynamic-component.directive";

describe("DynamicComponentDirective", () => {
    it("should create an instance", () => {
        const directive = new DynamicComponentDirective();
        expect(directive).toBeTruthy();
    });
});
