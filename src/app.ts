import {ArgsParser} from "./args/args-parser.service";
import {Questionary} from "./prompt/prompt.service";
import {OpenweatherService} from "./openweather/openweather.service";
import {Temp} from "./common/temp";

const argv = ArgsParser.getArgs();
console.log(argv);

(async () => {
    const response = await Questionary.getAnswers();
    console.log(response);
})();

(async () => {
    const response = await OpenweatherService.getWeather("London,uk", Temp.FAHRENHEIT);
    console.log(response);
})();
