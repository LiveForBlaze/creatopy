import { getWeather } from '../../weatherSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';

import useDebounce from 'lib/hooks/useDebounce';
import { useState } from 'react';

import styles from './Search.module.css';

type Units = 'metric' | 'imperial' | 'kelvin';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const cityFound = useAppSelector((state) => state.weather.data?.getCityByName);
  const [cityName, setCityName] = useState<string>('');
  const debouncedCityName = useDebounce(cityName);
  const [units, setUnits] = useState<Units>('metric');
  
  useEffect(() => {
    dispatch(getWeather({ name: debouncedCityName, units }));
    // eslint-disable-next-line
  }, [debouncedCityName]);

  useEffect(() => {
    if(cityFound) {
      dispatch(getWeather({ name: debouncedCityName, units }));
    }
    // eslint-disable-next-line
  }, [units]);

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        onChange={(e) => setCityName(e.target.value) } 
        className={styles.searchInput} 
      />      
      <select 
        name="units" 
        onChange={(e) => setUnits(e.target.value as Units)} 
        className={styles.select}
      >
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
        <option value="kelvin">Kelvin</option>
      </select>
    </div>
  )
}