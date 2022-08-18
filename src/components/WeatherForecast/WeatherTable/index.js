import Row from "./Row";
import "./index.css";

function WeatherTable({ data, loading }) {
  return (
    <div className="table">
      <div className="row header">
        <div>Город</div>
        <div>C°</div>
        <div>F°</div>
      </div>

      {loading ? (
        <div className="loader">Обновление данных</div>
      ) : !data.length ? (
        <div className="loader">Нет данных</div>
      ) : (
        data.map((row) => <Row key={row.id} {...row} />)
      )}
    </div>
  );
}

export default WeatherTable;
