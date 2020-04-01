import { Temp } from "../common/temp";

export class TemperatureConverter {

    static convertMap = {
        [Temp.CELSIUS]: "metric",
        [Temp.FAHRENHEIT]: "imperial"
    };

    static convert(temp: Temp): string {
        if (!TemperatureConverter.convertMap[temp]) {
            throw new Error(`Unknown temperature unit: ${temp}`);
        }
        return TemperatureConverter.convertMap[temp];
    }
}
