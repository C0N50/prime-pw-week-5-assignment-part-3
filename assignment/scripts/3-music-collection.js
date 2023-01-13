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
}


console.log('Adding to collection', addToCollection ('Parachutes', 'Coldplay', 2000));
console.log('Adding to collection', addToCollection ('Led Zeppelin IV', 'Led Zeppelin', 1971));
console.log('Adding to collection', addToCollection ('Revolver', 'The Beatles', 1966));
console.log('Adding to collection', addToCollection ('In Rainbows', 'Radiohead', 2007));
console.log('Adding to collection', addToCollection ('They Want My Soul', 'Spoon', 2014));
console.log('Adding to collection',addToCollection ('Halcyon Drift', 'C0N50', 2022));
console.log('My album Collection is', collection);
console.log('\n\n');