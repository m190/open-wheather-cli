interface AdditionalWeatherInfo {
    description: string;
}

interface MainWeatherInfo {
    temp: number;
    humidity: number;
}

export interface OpenweatherSuccessResponse {
    weather: Array<AdditionalWeatherInfo>;
    main: MainWeatherInfo;
}

export interface OpenweatherErrorResponse {
    error: string;
}

export type OpenweatherResponse = OpenweatherSuccessResponse | OpenweatherErrorResponse;
