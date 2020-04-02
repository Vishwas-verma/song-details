import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {title: "No scrubs", duration: "4:05"},
    {title: "Macerana", duration: "2:35"},
    {title: "All stars", duration: "3:15"},
    {title: "Senorita", duration: "1:45"}
  ];
};

const selectSongReducer = (selectedSong = null, action: any) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
});