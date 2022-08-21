import { useAppSelector } from 'app/hooks';
import styles from './Info.module.css';

export const Info: React.FC = () => {
  const data = useAppSelector((state) => state.weather.data?.getCityByName);

  if (!data) {
    return <div>No data...</div>
  }

  return (
    <div className={styles.container}>
      <h1>{data.name}</h1>
      <div>Temperature: {data.weather.temperature.actual}</div>
      <div>Wind: {data.weather.wind.speed}</div>
      <div>Summary: {data.weather.summary.description}</div>
    </div>
  )
}