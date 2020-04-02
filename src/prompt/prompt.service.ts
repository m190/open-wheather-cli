import prompts, { PromptObject } from "prompts";
import { Temp } from "../common/temp";
import { QuestionAnswers } from "./question-answers";

export class Questionary {

    static async getAnswers(city: string): Promise<QuestionAnswers> {
        const questions: Array<PromptObject> = [
            {
                type: "text",
                name: "city",
                message: "What's the city/zip code?",
                validate: (val: string): boolean | string => (val && val.length > 0 ? true : "Should not be empty"),
                initial: city
            },
            {
                type: "select",
                name: "temp",
                message: "Celsius or Fahrenheit?",
                choices: [
                    { title: "Celsius", value: Temp.CELSIUS },
                    { title: "Fahrenheit", value: Temp.FAHRENHEIT }
                ],
                initial: 0
            }
        ];
        const onCancel = () => process.exit();
        return await prompts(questions, { onCancel }) as QuestionAnswers;
    }
}
