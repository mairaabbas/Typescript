// question 40

interface Album {
    artist: string;
    album: string;
    tracks?: number;
  }
  
  const make_album = (artist: string, album: string, tracks?: number) => {
    let albumObj: Album = {
      artist,
      album,
      ...(tracks != null && {
        tracks,
      }),
    };
    return albumObj;
  };
  console.log(make_album("Arjit singh", "banjara"));
  console.log(make_album("ap dhillon", "with you"));
  console.log(make_album("Ed Sheeran", "perfect", 10));