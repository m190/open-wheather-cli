import { WeatherInfo } from "../common/weather-info";

export interface InputArgs extends WeatherInfo {
    last: boolean;
    import: string;
}
