import { useEffect, useState } from "react";
import ListItem from "./ListItem";

export default function ItemList(props) {
  const [statuses, setStatuses] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/itemStatuses");
      const data = await response.json();
      setStatuses(data);
    }
    getData();
  }, []);

  const changeStatus = (id, status) =>
    setStatuses({ ...statuses, [id]: status });
  return props.items.map((item) => {
    return (
      <ListItem
        key={item.id}
        newsItem={item}
        changeStatus={changeStatus}
        status={statuses[item.id.toString()]}
        selectNewsItem={props.selectItem}
      />
    );
  });
}
