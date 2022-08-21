import { getWeather } from '../../weatherSlice';
import { useAppDispatch } from 'app/hooks';
import { useEffect } from 'react';

import useDebounce from 'lib/hooks/useDebounce';
import { useState } from 'react';

import styles from './Search.module.css';

type Units = 'metric' | 'imperial' | 'kelvin';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [cityName, setCityName] = useState<string>('');
  const devouncedCityName = useDebounce(cityName);
  const [units, setUnits] = useState<Units>('metric');
  
  useEffect(() => {
    dispatch(getWeather({ name: devouncedCityName, units }));
  }, [devouncedCityName, units]);

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