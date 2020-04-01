import got from "got";
import { OpenweatherService } from "../../src/openweather/openweather.service";
import { Temp } from "../../src/common/temp";
import { Weather } from "../../src/openweather/weather";

jest.mock("got");

describe("OpenweatherService", () => {
    test("Get weather successfully", async () => {
        const response = {
            main: {
                temp: 1,
                humidity: 50
            },
            weather: [{ description: "clear" }]
        };
        (got as unknown as jest.Mock).mockReturnValue({ json: () => response });

        const expected: Weather = {
            temp: response.main.temp,
            humidity: response.main.humidity,
            description: response.weather[0].description
        };

        const weather = OpenweatherService.getWeather({ city: "London", temp: Temp.CELSIUS });
        await expect(weather)
            .resolves
            .toEqual(expected);
    });

    test("Get weather error", async () => {
        const response = { error: 404 };
        (got as unknown as jest.Mock).mockReturnValue({ json: () => response });

        await expect(OpenweatherService.getWeather({ city: "London", temp: Temp.CELSIUS }))
            .rejects
            .toThrowError();
    });
});
