"use strict";
// question 40
Object.defineProperty(exports, "__esModule", { value: true });
const make_album = (artist, album, tracks) => {
    let albumObj = {
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
