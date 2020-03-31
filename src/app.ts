import yargs = require('yargs');

enum Temp {
    CELSIUS = "c",
    FAHRENHEIT = "f"
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
    .argv;

console.log(argv);
