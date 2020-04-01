import { Temp } from "../common/temp";

export interface RequestParamsBuilder {
    place(place: string): RequestParamsBuilder;

    temp(temp: Temp): RequestParamsBuilder;

    build(): Record<string, string>;
}
