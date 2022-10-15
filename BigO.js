/** Big O give us a precise, numeric and objective way of judging the performance of our code
 * The name Big O comes from the discipline of math and is used to describe the relationship between functions and their growth rates.
 * Big O is measured by TIME COMPLEXITY AND SPACE COMPLEXITY
 * Time complexity - the amount of time it takes to execute. It is measured in the number of steps an algorithm takes rather than measures of time like seconds or minutes.
  Space complexity - the amount of memory (RAM) required an algorithm needs to run.
  Each complexity can be described with notation like O(n): Where n represents the number of elements.
  Additionally, Big O can be represented visually with the execution time/memory on the y-axis and input size on the x-axis.
  As the input size increases the execution time can change, based on the algorithm being used

 */
const artists = [
  {
    name: "Miles Davis",
    albums: [
      {
        title: "In a Silent Way",
        songs: ["Shhh/Peaceful", "In a Silent Way/It's About That Time"],
      },
      {
        title: "Milestones",
        songs: [
          "Dr. Jekyl",
          "Sid's Ahead",
          ///...
        ],
      },
    ],
  },
  {
    name: "Dolly Parton",
    albums: [
      {
        title: "Jolene",
        songs: [
          //...
        ],
      },
      {
        title: "9 to 5 and Other Odd Jobs",
        songs: [
          // ...
        ],
      },
    ],
  },
];

// ******* CONSTANT COMPLEXITY O(1) *******
// ["Song1", "Song2"]
const getFirstSongFromPlaylist = (album) => {
  console.log(album[0]);
};

// ******* LINEAR COMPLEXITY O(n) *******
// ["Song1", "Song2", ...]
const printSongs = (album) => {
  for (let i = 0; i < album.length; i++) {
    console.log(album[i]);
  }
};
//   This algorithm has a Big O complexity of linear. For each added song to the array, the amount of time it takes to complete this is increased by 1 step.
// If the array (or playlist) has 1 item, it will take 1 step to complete. If the array has a million items it will take a million steps to complete.
// This type of complexity is considered pretty good efficiency.

// ******* QUADRATIC COMPLEXITY O(n^2) OR O(n*m) *******
// "List every song on all albums"
const PrintSongsWithinAlbums = (artist) => {
  // array with the lenth of two
  for (let i = 0; i < artist.albums.length; i++) {
    // some unknown length but the longest amount of albums
    for (let j = 0; j < artist.album.songs.length; j++) {
      // some unkown length of albums - some unknown length of steps -> the longest album
      console.log(artist.album[i].songs[j]);
    }
  }
};

/// the longest number of artist albums (n) * the album with the most songs (m)
//   This algorithm has a Big O complexity of quadratic. For each added item to the array, the amount of time it takes to complete this is increased by n to the n power!
//  Imagine you wanted to print every song by an artist. The above function would loop through each album and then within each album, loop through each song. For each album the complexity doesn't increase just by 1 step, but by each album times each song on the album.
// If every album has ten songs, if we have 10 albums, we go through the steps 10 times for the albums and then times for each song so for a collection of 10 albums we go through the algorithm 100 times. If we had 100 albums and still 10 songs, we'd go through this algorithm 1000 times...
