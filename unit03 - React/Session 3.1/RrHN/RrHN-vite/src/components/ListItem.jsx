export default function ListItem(props) {
  console.log(props);
  return (
    <div className="Item">
      {JSON.stringify(props)}
      <div className="mainInfo">
        <div>
          <a
            className="itemTitle"
            href="https://github.com/fatiherikli/language-evolution-simulation"
          >
            Show HN: Language Evolution Simulation
          </a>
          <span className="domain">(github.com)</span>
        </div>
        <div className="info">
          18 points
          <span className="divider">|</span>
          by fatiherikli
          <span className="divider">|</span>
          July 18, 2016
          <span className="divider">|</span>
          <a
            className="comments"
            href="https://news.ycombinator.com/item?id=12115187"
          >
            <strong>665</strong> comments
          </a>
        </div>
      </div>
    </div>
  );
}
