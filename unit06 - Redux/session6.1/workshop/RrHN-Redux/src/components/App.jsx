import React, { useEffect } from "react";
import { useState } from "react";

import frontPageItems from "../frontpageData";
import ItemList from "./ItemList";
import Preferences from "./Preferences";

export default function App() {
  const [activeItemId, setActiveItemId] = useState(null);
  const [preferences, setPreferences] = useState({
    active: false,
    color: "orange",
    listSize: 42,
  });

  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState("none");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/hn/topstories");
      const data = await response.json();
      setItems(Object.values(data));
      Object.keys(data).forEach((i) => {
        if (i === activeItemId) {
          setActiveItem(data[i]);
        }
      });
    };
    getData();
  }, []);

  const savePrefs = (toBeSavedPreferences) =>
    setPreferences({ ...toBeSavedPreferences, active: false });

  const togglePrefs = () =>
    setPreferences({ ...preferences, active: !preferences.active });
  return (
    <div className={`App ${preferences.color}`}>
      <ListPanel
        preferences={preferences}
        items={items.slice(0, preferences.listSize)}
        activeItemId={activeItemId}
        selectItem={(id) => setActiveItemId(id)}
        togglePrefs={togglePrefs}
      />
      <ContentPanel
        activeItem={activeItem}
        preferences={preferences}
        setPreferences={savePrefs}
      />
    </div>
  );
}

function ContentPanel(props) {
  let currentPanel = <EmptyPanel />;
  if (props.preferences.active) {
    return (
      <Preferences
        preferences={props.preferences}
        togglePrefs={props.togglePrefs}
        setPreferences={props.setPreferences}
      />
    );
  } else if (props.activeItem !== "none") {
    return <ItemPanel activeItem={props.activeItem} />;
  }
  return currentPanel;
}

function ListHeader(props) {
  return (
    <header id="ListHeader" className="panelHeader">
      <div className="Logo">
        <div className={`colored ${props.color}`}>RRHN</div>

        <div className="title">Hacker News</div>
      </div>
      <span className="settingsIcon" onClick={() => props.togglePrefs()}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"></path>
        </svg>
      </span>
    </header>
  );
}

function ListPanel(props) {
  return (
    <div id="ListPanel">
      <div className="ItemList">
        <ListHeader
          color={props.preferences.color}
          togglePrefs={props.togglePrefs}
        />
        <ListFooter />
        <div id="ListMainContent">
          <ItemList items={props.items} selectItem={props.selectItem} />
        </div>
      </div>
    </div>
  );
}

function EmptyPanel() {
  return (
    <div id="ItemPanel">
      <h2>No item selected yet.</h2>

      <p>Select an item in the colum on the left.</p>
    </div>
  );
}

function ItemPanel(props) {
  return (
    <div id="ItemPanel">
      <iframe
        className="IFrameView"
        src={props.activeItem.url}
        frameBorder={0}
      />
    </div>
  );
}

function ListFooter() {
  return (
    <div id="ListFooter">
      visual design based on
      <a href="http://blog.trackduck.com/weekly/top-10-hacker-news-redesigns/unknown-author-2/">
        this redesign by unknown author
      </a>
      .
    </div>
  );
}
