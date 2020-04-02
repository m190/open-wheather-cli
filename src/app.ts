import { ArgsParser } from "./args/args-parser.service";
import { Questionary } from "./prompt/prompt.service";
import { OpenweatherService } from "./openweather/openweather.service";
import { WeatherInfo } from "./common/weather-info";
import { HistoryService } from "./history/history.service";
import { ImportFileService } from "./bulk/import-file.service";
import { LocationService } from "./location/location.service";

const fetchBulk = async (path: string) => {
    const locations = await ImportFileService.getLocations(path);
    const data = locations.slice(0, 10);
    const weather = await Promise.all(data.map((d) => OpenweatherService.getWeather(d)));
    data.forEach(({ city }, idx) => console.log(`${city}:`, weather[idx]));
};

const fetchLast = async () => {
    const data = await HistoryService.getLast();
    const result = await OpenweatherService.getWeather(data);
    console.log(result);
};

const fetch = async (info: WeatherInfo, geo: boolean) => {
    let data = info;

    if (!data.city) {
        const city = geo ? await LocationService.getLocation() : "";
        data = await Questionary.getAnswers(city);
    }

    const [result] = await Promise.all([OpenweatherService.getWeather(data), HistoryService.saveLast(data)]);
    console.log(result);
};

(async () => {
    const argv = ArgsParser.getArgs();

    if (argv.import) {
        await fetchBulk(argv.import);
    } else if (argv.last) {
        await fetchLast();
    } else {
        await fetch(argv, !argv.nogeo);
    }
})();
