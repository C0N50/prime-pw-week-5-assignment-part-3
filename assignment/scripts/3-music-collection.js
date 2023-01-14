console.log('***** Music Collection *****')
console.log('\n\n');

//Global Variables
//declaring collection array
let collection = [];

//track list array Declarations
let parachutes = 
[
   {name: 'Don\'t Panic', duration: '2:16'}, 
   {name: 'Shiver', duration: '5:04'},
   {name: 'Spies', duration: '5:18'},
   {name: 'Sparks', duration: '3:47'},
   {name: 'Yellow', duration: '4:26'},
   {name: 'Trouble', duration: '4:33'},
   {name: 'Parachutes', duration: '0:46'},
   {name: 'High Speed', duration: '4:16'},
   {name: 'We Never Change', duration: '4:09'},
   {name: 'Everything\'s Not Lost - Includes Hidden Track \'Life Is For Living\'', duration: '7:16'}
];

let ledZeppelinIV =
[
   {name: 'Black Dog', duration: '4:55'},
   {name: 'Rock and Roll', duration: '3:40'},
   {name: 'The Battle of Evermore', duration: '5:51'},
   {name: 'Stairway to Heaven', duration: '8:02'},
   {name: 'Misty Mountain Hop', duration: '4:38'},
   {name: 'Four Sticks', duration: '4:45'},
   {name: 'Going to California', duration: '3:32'},
   {name: 'When the Levee Breaks', duration: '7:08'},
]

let revolver =
[ 
   {name: 'Taxman', duration: '2:38'},
   {name: 'Eleanor Rigby', duration: '2:06'},
   {name: 'I\'m Only Sleeping', duration: '3:00'},
   {name: 'Love You To', duration: '2:59'},
   {name: 'Here\, There And Everywhere', duration: '2:24'},
   {name: 'Yellow Submarine', duration: '2:38'},
   {name: 'She Said She Said', duration: '2:16'},
   {name: 'Good Day Sunshine', duration: '2:09'},
   {name: 'And Your Bird Can Sing', duration: '2:00'},
   {name: 'For No One', duration: '1:59'},
   {name: 'Doctor Robert', duration: '2:14'},
   {name: 'I Want To Tell You', duration: '2:27'},
   {name: 'Got To Get You Into My Life', duration: '2:29'},
   {name: 'Tomorrow Never Knows', duration: '2:59'},
]

let kidA =
[
   {name: 'Everything In Its Right Place', duration: '4:11'},
   {name: 'Kid A', duration: '4:44'},
   {name: 'The National Anthem', duration: '5:51'},
   {name: 'How to Disappear Completely', duration: '5:56'},
   {name: 'Treefingers', duration: '3:42'},
   {name: 'Opmtimistic', duration: '5:15'},
   {name: 'In Limbo', duration: '3:31'},
   {name: 'Idioteque', duration: '4:35'},
   {name: 'Morning Bell', duration: '4:35'},
   {name: 'Motion Picture Soundtrack', duration: '3:20'},
   {name: 'Untitled', duration: '0:52'},
]

let abbeyRoad = 
[
   {name: 'Come Together', duration: '4:11'},
   {name: 'Something', duration: '3:02'},
   {name: 'Maxwell\'s Silver Hammer', duration: '3:27'},
   {name: 'Oh! Darling', duration: '3:27'},
   {name: 'Octopus\'s Garden', duration: '2:50'},
   {name: 'I Want You (She\'s So Heavy)', duration: '7:47'},
   {name: 'Here Comes The Sun', duration: '3:05'},
   {name: 'Because', duration: '2:45'},
   {name: 'You Never Give Me Your Money', duration: '4:02'},
   {name: 'Sun King', duration: '2:26'},
   {name: 'Mean Mr Mustard', duration: '1:06'},
   {name: 'Polythene Pam', duration: '1:12'},
   {name: 'She Came In Through The Bathroom Window', duration: '1:58'},
   {name: 'Golden Slumbers', duration: '1:36'},
   {name: 'Carry That Weight', duration: '1:36'},
   {name: 'The End', duration: '2:21'},
]

let halcyonDrift =
[
   {name: 'Porcelain Rain', duration: '4:21'},
   {name: 'Chill', duration: '4:33'},
   {name: 'Shoewave', duration: '3:53'},
   {name: 'Discreetly Discrete', duration: '3:12'},
   {name: 'She', duration: '3:21'},
   {name: 'Juliet', duration: '5:03'},
   {name: 'Celebrate', duration: '4:02'},  
]


//Function Delcarations

function addToCollection(title, artist, yearPublished, tracks) {
   let album = { 
      title: title,
      artist: artist,
      yearPublished: yearPublished, 
      tracks: tracks
   };
   collection.push(album);
   return album;
} //end addToCollection

function showCollection(collection) {
   console.log('Size of collection:', collection.length);
   for (album of collection) {
      console.log (`${album.title} by ${album.artist} published in ${album.yearPublished} :`);
      let songList = album.tracks;
      let trackNumber = 1;
      for (song of songList) {
         console.log (`${trackNumber}. ${song.name}: ${song.duration}`); 
         trackNumber++;
      }

   }
   return true;
} //end showCollection

function findByArtist (artist) {
   let foundArtists = [];
   for (album of collection) {
      if (album.artist === artist) {
         foundArtists.push(album);
      }
   }
   return foundArtists;
}

function search(searchAlbum) {
   let foundAlbums = [];   
   if (searchAlbum.artist && searchAlbum.yearPublished && searchAlbum.name) { //if find input of all accepted fields in object artists, year, and track objects.
      for (let album of collection) { //loop to search all albums in the collection
         let albumTrackList = album.tracks; //local variable to store tracklist array
         for (let albumTrack of albumTrackList) { //loop search all tracks in track list
               if (album.artist === searchAlbum.artist && album.yearPublished === searchAlbum.yearPublished && albumTrack.name === searchAlbum.name) {
                  foundAlbums.push(album);
               }
         }
      }
      return foundAlbums;
   }

   if (searchAlbum.artist && searchAlbum.yearPublished) {
   for (let album of collection) {
      if (album.artist === searchAlbum.artist && album.yearPublished === searchAlbum.yearPublished) {
         foundAlbums.push(album);
      }
   }
   return foundAlbums;
   }
   if (searchAlbum.artist) {
      for (let album of collection) {
         if (album.artist === searchAlbum.artist) {
            foundAlbums.push(album);
         }
      }
      return foundAlbums;
   }
   if (searchAlbum.yearPublished) {
      for (let album of collection) {
         if (album.yearPublished === searchAlbum.yearPublished) {
            foundAlbums.push(album);
         }
      }
      return foundAlbums;
   }
   else {
      return collection;
   }
}

//test track list functionality
console.log('Parachutes Tracklist:', parachutes);
console.log('\n\n');

//Test cases for addToCollection functionality
console.log('#1: Adding to collection', addToCollection ('Parachutes', 'Coldplay', 2000, parachutes));
console.log('#1: Adding to collection', addToCollection ('Led Zeppelin IV', 'Led Zeppelin', 1971, ledZeppelinIV));
console.log('#1: Adding to collection', addToCollection ('Revolver', 'The Beatles', 1966, revolver));
console.log('#1: Adding to collection', addToCollection ('Kid A', 'Radiohead', 2000, kidA));
console.log('#1: Adding to collection', addToCollection ('Abbey Road', 'The Beatles', 1969, abbeyRoad));
console.log('#1: Adding to collection',addToCollection ('Halcyon Drift', 'C0N50', 2022, halcyonDrift));
console.log('#1: My album Collection is', collection);
console.log('\n\n');

//test cases for shoeCollection functionality
console.log ('#2:', showCollection(collection));
console.log('\n\n');

//test cases for findByArtist functionality
console.log ('#3: Find by artist Coldplay, Found:', findByArtist('Coldplay'));
console.log ('#3: Find by The Beatles, Found:', findByArtist('The Beatles'));
console.log ('#3: Find by The Beatles, Found:', findByArtist('AC/DC'));
console.log('\n\n');

//test cases for Search functionality

console.log ('#4: Searching for artist: \'Radiohead\', year: 2000:', search({ artist:'Radiohead', yearPublished:2000 }));
console.log ('#4: Searching for artist: \'The Beatles\'', search({ artist:'The Beatles' }));
console.log ('#4: Searching for artist: \'The Beatles\'', search({ artist:'The Beatles', yearPublished:1999 }));
console.log ('#4: Searching for artist: \'C0N50\', year:2022', search({ title:'Halcyon Drift', artist:'C0N50', yearPublished:2022 }));
console.log ('#4: Searching for Year Published: year:2000', search({ yearPublished:2000 }));
console.log ('#4: Searching for Track: Rock and Roll', search({ name:'Rock and Roll' }));
console.log ('#4: Searching for Track: Shiver', search({ artist:'Coldplay', yearPublished:2000, name:'Shiver' }));
console.log('\n\n');