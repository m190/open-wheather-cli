import { Temp } from "../../src/common/temp";
import { TemperatureConverter } from "../../src/openweather/temp.converter";

describe("TemperatureConverter", () => {
    test.each([
        [Temp.CELSIUS, "metric"], [Temp.FAHRENHEIT, "imperial"]
    ])("Successfully map %o => %s", (from: Temp, to: string) => {
        expect(TemperatureConverter.convert(from)).toEqual(to);
    });

    test.each([null, undefined])("Failed to map %s", (from: unknown) => {
        expect(() => TemperatureConverter.convert(from as Temp)).toThrowError();
    });
});
