import got from "got";
import { OPENWEATHER_URL } from "../config/config";
import { Weather } from "./weather";
import { OpenweatherErrorResponse, OpenweatherResponse, OpenweatherSuccessResponse } from "./openweather-response";
import { OpenweatherRequestParamsBuilder } from "./openweather-request-params.builder";
import { WeatherInfo } from "../common/weather-info";

export class OpenweatherService {

    static async getWeather(data: WeatherInfo): Promise<Weather> {
        const params = new OpenweatherRequestParamsBuilder()
            .place(data.city)
            .temp(data.temp)
            .build();

        const response = await got(OPENWEATHER_URL, { searchParams: params }).json() as OpenweatherResponse;

        if ((response as OpenweatherErrorResponse).error) {
            const error = response as OpenweatherErrorResponse;
            throw new Error(`Weather info not found: ${error.error}`);
        }

        const result = response as OpenweatherSuccessResponse;
        return {
            temp: result.main.temp,
            humidity: result.main.humidity,
            description: result.weather[0].description
        };
    }
}
