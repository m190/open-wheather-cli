import { RequestParamsBuilder } from "./request-params.builder";
import { TemperatureConverter } from "./temp.converter";
import { Temp } from "../common/temp";
import { OPENWEATHER_APPID } from "../config/config";

export class OpenweatherRequestParamsBuilder implements RequestParamsBuilder {

    private location?: string;
    private units?: string;

    place(place: string): RequestParamsBuilder {
        this.location = place;
        return this;
    }

    temp(temp: Temp): RequestParamsBuilder {
        this.units = TemperatureConverter.convert(temp);
        return this;
    }

    build(): Record<string, string> {
        if (!this.location || !this.units) {
            throw new Error("Required attributes was not provided.");
        }
        return { q: this.location, units: this.units, appid: OPENWEATHER_APPID };
    }
}
