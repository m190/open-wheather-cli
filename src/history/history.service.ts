import {WeatherInfo} from "../common/weather-info";
import fs, {promises as fsp} from "fs";
import os from "os";
import path from "path";

export class HistoryService {

    private static FILE_PATH = path.join(os.homedir(), ".openwheather");

    static async getLast(): Promise<WeatherInfo> {
        if (fs.existsSync(HistoryService.FILE_PATH)) {
            const data = await fsp.readFile(HistoryService.FILE_PATH);
            return JSON.parse(data.toString()) as WeatherInfo;
        }
        throw new Error("No previous history");
    }

    static async saveLast(data: WeatherInfo): Promise<void> {
        await fsp.writeFile(HistoryService.FILE_PATH, JSON.stringify(data));
    }
}
