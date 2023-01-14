console.log('***** Music Collection *****')
console.log('\n\n');

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
   let album = { 
    title: title,
    artist: artist,
    yearPublished: yearPublished, 
    tracks: []
   };
   collection.push(album);
   return album;
} //end addToCollection

function showCollection(collection) {
   console.log('Size of collection:', collection.length);
   for (album of collection) {
      console.log (album.title + ' by ' + album.artist + ' published in ' + album.yearPublished);
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
   if (searchAlbum.artist && searchAlbum.yearPublished) {
   for (album of collection) {
      if (album.artist === searchAlbum.artist && album.yearPublished === searchAlbum.yearPublished) {
         foundAlbums.push(album);
      }
   }
   return foundAlbums;
   }
   if (searchAlbum.artist) {
      for (album of collection) {
         if (album.artist === searchAlbum.artist) {
            foundAlbums.push(album);
         }
      }
      return foundAlbums;
   }
   if (searchAlbum.yearPublished) {
      for (album of collection) {
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

//delcaring track list arrays
let parachutesList = 
[{name: 'Don\'t Panic', duration: '2:16'}, 
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


//test track list functionality
console.log('Parachutes Tracklist:', parachutesList);
console.log('\n\n');

//Test cases for addToCollection functionality
console.log('#1: Adding to collection', addToCollection ('Parachutes', 'Coldplay', 2000, parachutesList));
console.log('#1: Adding to collection', addToCollection ('Led Zeppelin IV', 'Led Zeppelin', 1971));
console.log('#1: Adding to collection', addToCollection ('Revolver', 'The Beatles', 1966));
console.log('#1: Adding to collection', addToCollection ('Kid A', 'Radiohead', 2000));
console.log('#1: Adding to collection', addToCollection ('Abbey Road', 'The Beatles', 1969));
console.log('#1: Adding to collection',addToCollection ('Halcyon Drift', 'C0N50', 2022));
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
console.log('\n\n');