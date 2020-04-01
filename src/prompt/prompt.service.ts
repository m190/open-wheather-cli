export import prompts = require("prompts");
import {PromptObject} from "prompts";
import {Temp} from "../common/temp";
import {QuestionAnswers} from "./question-answers";

export class Questionary {
    static questions: Array<PromptObject> = [
        {
            type: "text",
            name: "city",
            message: "What's the city/zip code?",
            validate: (val: string) => val && val.length > 0 ? true : "Should not be empty"
        },
        {
            type: "select",
            name: "temp",
            message: "Celsius or Fahrenheit?",
            choices: [
                {title: 'Celsius', value: Temp.CELSIUS},
                {title: 'Fahrenheit', value: Temp.FAHRENHEIT}
            ],
            initial: 0
        }
    ];


    static async getAnswers() {
        return await prompts(Questionary.questions) as QuestionAnswers
    }
}
