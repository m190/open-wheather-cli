import {ArgsParser} from "./args/args-parser.service";
import {Questionary} from "./prompt/prompt.service";
import {OpenweatherService} from "./openweather/openweather.service";
import {WeatherInfo} from "./common/weather-info";
import {HistoryService} from "./history/history.service";
import {ImportFileService} from "./bulk/import-file.service";

const fetchBulk = async (path: string) => {
    const locations = await ImportFileService.getLocations(path);
    const data = locations.slice(0, 10);
    const weather = await Promise.all(data.map(l => OpenweatherService.getWeather(l)));
    data.forEach(({city}, idx) => console.log(`${city}:`, weather[idx]))
};

const fetchLast = async () => {
    const data = await HistoryService.getLast();
    const result = await OpenweatherService.getWeather(data);
    console.log(result);
};

const fetch = async (data: WeatherInfo) => {
    if (!data.city) {
        data = await Questionary.getAnswers();
    }

    if (data.city && data.temp) {
        const [result] = await Promise.all([OpenweatherService.getWeather(data), HistoryService.saveLast(data)]);
        console.log(result);
    }
};

(async () => {
    const argv = ArgsParser.getArgs();

    if (argv.import) {
        await fetchBulk(argv.import);
    }
    else if (argv.last) {
        await fetchLast();
    }
    else {
        await fetch(argv);
    }
})();
