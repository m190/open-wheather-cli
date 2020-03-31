import {Questionary} from "./prompt/prompt.service";
import {ArgsParser} from "./args/args-parser.service";

const argv = ArgsParser.getArgs();
console.log(argv);

(async () => {
    const response = await Questionary.getAnswers();
    console.log(response);
})();
