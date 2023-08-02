import Header from '../Header';
import WeatherForecast from '../WeatherForecast';
import './index.css';

function WeatherPage() {
  return (
    <div className="container">
      <Header />
      <WeatherForecast />
    </div>
  );
}

export default WeatherPage;