import { Box, Typography } from "@mui/material";

const WeatherTitle = () => {

    return (
        <Box>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontSize: 'clamp(2rem, 5vw, 3rem'
                }}
            >
                    浜松の天気情報
                </Typography>
        </Box>
    )
}

export default WeatherTitle;