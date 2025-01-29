import {Environment} from "../../src/http/Environment";

describe("Environment", () => {
    test("retorna el valor correcto si la variable existe", () => {
        process.env.TEST_VAR = "some_value";

        const result = Environment.get("TEST_VAR");

        expect(result).toBe("some_value");
    });

    test("retorna undefined si la variable no existe", () => {
        const result = Environment.get("NON_EXISTENT_VAR");

        expect(result).toBeUndefined();
    });

    test("retorna el valor correcto si la variable existe", () => {
        process.env.TEST_VAR = "required_value";

        const result = Environment.getOrThrow("TEST_VAR");

        expect(result).toBe("required_value");
    });

    test("lanza un error si la variable no existe", () => {
        expect(() => Environment.getOrThrow("MISSING_VAR")).toThrowError(
            "Environment variable MISSING_VAR is required but not set."
        );
    });

    beforeEach(() => {
        delete process.env.TEST_VAR;
    });
});
