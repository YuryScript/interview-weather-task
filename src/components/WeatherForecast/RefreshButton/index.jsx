import "./index.css";

function RefreshButton({click}) {
  return (
    <button className="refresh" onClick={click}>Обновить</button>
  );
}

export default RefreshButton;