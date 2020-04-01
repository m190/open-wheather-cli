import {ArgsParser} from "./args/args-parser.service";
import {Questionary} from "./prompt/prompt.service";
import {OpenweatherService} from "./openweather/openweather.service";
import {WeatherInfo} from "./common/weather-info";

const argv = ArgsParser.getArgs();

(async () => {
    let data = argv as WeatherInfo;

    if (!argv.city) {
        data = await Questionary.getAnswers();
    }

    if (data.city && data.temp) {
        const result = await OpenweatherService.getWeather(data);
        console.log(result);
    }
})();
