import type { WeatherInfo } from "../types/WeatherInfo.type";

export const fetchWeatherInfo = async(): Promise<WeatherInfo> => {
    const URL: string = "https://weather.tsukumijima.net/api/forecast/city/220040";
    const response = await fetch(URL);

    if (!response) {
        throw new Error("データの取得に失敗しました。");
    }

    const data = await response.json();
    const weatherInfo: WeatherInfo = {
        weather: data.forecasts[1].telop,
        temperature: data.forecasts[1].temperature.min.celsius,
        description: data.description.bodyText,
    };

    return weatherInfo;
}