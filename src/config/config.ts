import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
}

export const OPENWEATHER_URL: string = process.env.OPENWEATHER_URL!;
export const OPENWEATHER_APPID: string = process.env.OPENWEATHER_APPID!;

if (!OPENWEATHER_URL || !OPENWEATHER_APPID) {
    throw new Error("OpenWeather API config missing.");
}
