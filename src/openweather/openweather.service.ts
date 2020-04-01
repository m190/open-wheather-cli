import got from "got";
import {OPENWEATHER_URL} from "../config/config";
import {Temp} from "../common/temp";
import {Weather} from "./weather";
import {OpenweatherErrorResponse, OpenweatherResponse, OpenweatherSuccessResponse} from "./openweather-response";
import {OpenweatherRequestParamsBuilder} from "./openweather-request-params.builder";

export class OpenweatherService {

    static async getWeather(place: string, temp: Temp): Promise<Weather> {
        const params = new OpenweatherRequestParamsBuilder()
            .place(place)
            .temp(temp)
            .build();

        const response = await got(OPENWEATHER_URL, {searchParams: params}).json() as OpenweatherResponse;

        if (!(response as OpenweatherErrorResponse).error) {
            const data = response as OpenweatherSuccessResponse;
            return {
                temp: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description
            }
        }
        else {
            const error = response as OpenweatherErrorResponse;
            throw new Error(`Weather info not found: ${error.error}`);
        }
    }
}
