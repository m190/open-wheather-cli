import {ArgsParser} from "./args/args-parser.service";
import {Questionary} from "./prompt/prompt.service";
import {OpenweatherService} from "./openweather/openweather.service";
import {WeatherInfo} from "./common/weather-info";
import {HistoryService} from "./history/history.service";

const argv = ArgsParser.getArgs();

(async () => {
    let data = argv as WeatherInfo;

    if (argv.last) {
        data = await HistoryService.getLast();
    }

    if (!data.city) {
        data = await Questionary.getAnswers();
    }

    if (data.city && data.temp) {
        const [result] = await Promise.all([OpenweatherService.getWeather(data), HistoryService.saveLast(data)]);
        console.log(result);
    }
})();
