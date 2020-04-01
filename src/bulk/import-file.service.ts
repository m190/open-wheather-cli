import {WeatherInfo} from "../common/weather-info";
import fs, {promises as fsp} from "fs";

export class ImportFileService {

    static async getLocations(path: string): Promise<Array<WeatherInfo>> {
        if (fs.existsSync(path)) {
            const data = await fsp.readFile(path);
            return JSON.parse(data.toString()) as Array<WeatherInfo>;
        }
        throw new Error(`File '${path}' does not exists.`);
    }
}
