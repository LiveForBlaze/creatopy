import { Search } from './components/Search';
import { WeatherInfo } from './components/WeatherInfo';
import styles from './Weather.module.css';

export const Weather: React.FC = () => (
  <div className={styles.container}>
    <Search />
    <WeatherInfo />
  </div>
)