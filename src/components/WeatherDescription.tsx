import { Box, Typography } from "@mui/material";
import type { WeatherInfo } from "../types/WeatherInfo.type";

const WeatherDescription = (weatherInfo: WeatherInfo | null) => {

    return (
        <Box>
            <Typography variant="h2" color="red">天気：{weatherInfo && weatherInfo.weather}</Typography>
            <Typography variant="h2" color="lightblue">気温：{weatherInfo && weatherInfo.temperature}</Typography>
            <Typography variant="h3" color="#ffffe0">天気情報：{weatherInfo && weatherInfo.description}</Typography>
        </Box>
    )
}

export default WeatherDescription;