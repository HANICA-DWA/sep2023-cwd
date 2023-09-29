import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../preferences.reducer";

export default function Preferences(props) {
  // extract the color from the reducer
  const color = useSelector((state) => state.preferences.color);
  // import dispatch to send changes to the reducer
  const dispatch = useDispatch();

  const [localPrefs, setLocalPrefs] = useState({
    ...props.preferences,
    color: color,
  });

  const setPrefs = (localPrefs) => {
    // send the change to the reducer
    dispatch(changeColor({ payload: localPrefs.color }));
    props.setPreferences(localPrefs);
  };

  return (
    <div id="ItemPanel" className={`${localPrefs.color}`}>
      <div className="PreferencesDialog">
        <header>
          <div className="Logo">
            <div className="colored">RrHN</div>
            <div className="title">Settings</div>
          </div>
        </header>
        <label htmlFor="listSizeField">
          Show{" "}
          <input
            type="number"
            onChange={(e) =>
              setLocalPrefs({ ...localPrefs, listSize: e.target.value })
            }
            id="listSizeField"
            value={localPrefs.listSize}
          />{" "}
          items in the list.
        </label>
        <label htmlFor="colorField">
          color:
          <select
            value={localPrefs.color}
            onChange={(e) =>
              setLocalPrefs({ ...localPrefs, color: e.target.value })
            }
            id="colorField"
          >
            <option>orange</option>
            <option>green</option>
            <option>brown</option>
          </select>
        </label>
        <div className="dialogButtons">
          <button onClick={() => setPrefs(localPrefs)}>OK</button>
          <button onClick={() => props.togglePrefs()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
