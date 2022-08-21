import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { graphqlAPI } from '../../app/graphql';
import { getWeatherQuery } from './queries/getWeatherQuery';
import { GetWeatherData } from './models/getWeather';

interface GetWeatherProps {
  name: string;
  units: string;
}
 
interface WeatherSlice {
  data: null | GetWeatherData;
  status: 'idle' | 'loading' | 'failed';
}

interface graphqlAPIVariables {
  name: string;
  config: {
    units: string;
  }
}

export const getWeather = createAsyncThunk("weather/getWeather", async (args: GetWeatherProps) => {
  const response = await graphqlAPI<string, graphqlAPIVariables>(getWeatherQuery, { name: args?.name, config: { units: args?.units } })
  return await response.json();
  }
);

const initialState: WeatherSlice = {
  data: null,
  status: 'idle'
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload.data
      })
      .addCase(getWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default weatherSlice.reducer;