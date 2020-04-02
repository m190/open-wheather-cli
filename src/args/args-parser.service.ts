import yargs from "yargs";
import { Temp } from "../common/temp";
import { InputArgs } from "./input-args";

export class ArgsParser {

    static getArgs(): InputArgs {
        return yargs
            .options({
                city: {
                    alias: ["c", "z"],
                    describe: "City or Zip"
                },
                temp: {
                    alias: "t",
                    choices: [Temp.CELSIUS, Temp.FAHRENHEIT],
                    default: Temp.CELSIUS,
                    describe: "Temperature format"
                },
                last: {
                    alias: "l",
                    describe: "Fetch weather for the latest query"
                },
                import: {
                    alias: "i",
                    describe: "Import the config file"
                },
                nogeo: {
                    describe: "Do not use geolocation for hints"
                }
            })
            .argv as InputArgs;
    }

}
