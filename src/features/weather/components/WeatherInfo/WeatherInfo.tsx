import { useAppSelector } from 'app/hooks';
import { Loading } from './components/Loading';
import { Info } from './components/Info';
import styles from './WeatherInfo.module.css';

export const WeatherInfo: React.FC = () => {
  const loadingStatus = useAppSelector((state) => state.weather.status);
  const isLoading = loadingStatus === 'loading';
  return (
    <div>
      <div className={styles.container}>
        {
          isLoading ? <Loading /> : <Info />
        }
      </div>
      <div className={styles.reflection} />
    </div>
  )
}