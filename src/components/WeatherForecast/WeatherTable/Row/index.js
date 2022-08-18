function Row({ name, tempC, tempF }) {
  return (
    <div className="row">
      <div>{name}</div>
      <div>{tempC}</div>
      <div>{tempF}</div>
    </div>
  );
}

export default Row;