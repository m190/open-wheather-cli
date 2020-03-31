import yargs = require("yargs");
import prompts = require("prompts");
import {PromptObject} from "prompts";

enum Temp {
    CELSIUS = "c",
    FAHRENHEIT = "f"
}

interface QuestionAnswers {
    city: string;
    temp: Temp;
}

interface InputArgs extends QuestionAnswers {
    last: boolean;
    import: string;
}

const argv = yargs
    .options({
        "city": {
            alias: ["c", "z"],
            describe: "City or Zip"
        },
        "temp": {
            alias: "t",
            choices: [Temp.CELSIUS, Temp.FAHRENHEIT],
            default: Temp.CELSIUS,
            describe: "Temperature format"
        },
        "last": {
            alias: "l",
            describe: "Fetch weather for the latest query"
        },
        "import": {
            alias: "i",
            describe: "Import the config file"
        }
    })
    .argv as InputArgs;

console.log(argv);

const questions: Array<PromptObject> = [
    {
        type: "text",
        name: "city",
        message: "What's the city/zip code?"
    },
    {
        type: "select",
        name: "temp",
        message: "Celsius or Fahrenheit?",
        choices: [
            { title: 'Celsius', value: Temp.CELSIUS },
            { title: 'Fahrenheit', value: Temp.FAHRENHEIT }
        ],
        initial: 0
    }
];

(async () => {
    const response = await prompts(questions) as QuestionAnswers;
    console.log(response);
})();
