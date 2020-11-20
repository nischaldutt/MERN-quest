// Action creator

export const selectSong = (song) => {
  return {
    type: "SONG_SELECT",
    payload: song,
  };
};
