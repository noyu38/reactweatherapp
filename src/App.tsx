import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { fetchWeatherInfo } from './libs/fetchWeatherInfo';
import type { WeatherInfo } from './types/WeatherInfo.type';
import WeatherDescription from './components/WeatherDescription';
import WeatherTitle from './components/WeatherTitle';

function App() {

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  useEffect(() => {
    const handleSetWeatherInfo = async () => {

      const wData: WeatherInfo = await fetchWeatherInfo();

      setWeatherInfo(wData);
      console.log(wData);
    }
    handleSetWeatherInfo();
  }, []);
  return (
    // MUIにおけるdivみたいなもの
    <Box bgcolor="#ffffe0">
      <CssBaseline />
      <WeatherTitle />
      {weatherInfo && <WeatherDescription {...weatherInfo} />}
    </Box>
  );
}

export default App;


