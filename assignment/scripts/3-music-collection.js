console.log('***** Music Collection *****')
console.log('\n\n');

let collection = [];

function addToCollection(title, artist, yearPublished) {
   let album = { 
    title: title,
    artist: artist,
    yearPublished: yearPublished
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


//Test cases for addToCollection functionality
console.log('#1: Adding to collection', addToCollection ('Parachutes', 'Coldplay', 2000));
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

//test cases for findBy Artist functionality
console.log ('#3: Searching for Coldplay, Found:', findByArtist('Coldplay'));
console.log ('#3: Searching for The Beatles, Found:', findByArtist('The Beatles'));
console.log('\n\n');