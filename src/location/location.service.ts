import got from "got";

interface LocationData {
    status: string;
    city: string;
}

export class LocationService {
    static async getLocation(): Promise<string> {
        const response = await got("http://ip-api.com/json/?fields=status,city").json() as LocationData;
        if (response.status !== "success" || !response.city) {
            return "";
        }
        return response.city;
    }
}
