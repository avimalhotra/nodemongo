const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

    // Connection URL
const url = 'mongodb://localhost:27017';

    // Enter Database Name
const dbName = 'cars';

    // Create a new MongoClient
const client = new MongoClient(url,{ useUnifiedTopology: true });

// Use connect method to connect to the Server
//  client.connect(function(err) {
//    assert.strictEqual(null, err);
//    console.log("Connected successfully to MongoDB");

//    const db = client.db(dbName);
//    client.close();
//  });
 /*
const insertDocuments = function(db, callback) {
    // Get the documents collection
const collection = db.collection('maruti');

    // Insert some documents

   
collection.insertMany([
    {name : "alto",type :"hatchback",price : 350000},
    
], function(err, result) {
    assert.strictEqual(err, null);
    assert.strictEqual(1, result.result.n);
    assert.strictEqual(1, result.ops.length);
    console.log("Inserted 1 documents in collection");
    callback(result);
});
}

// Use connect method to connect to the server
client.connect(function(err) {
assert.strictEqual(null, err);
console.log("Connected successfully to server");

const db = client.db(dbName);

insertDocuments(db, function() {
client.close();
});
});
*/

const findDocuments = function(db, callback) {
    
    // Get the documents collection
    const collection = db.collection('suzuki');
   
     // Find some documents
    collection.find({type:'hatchback'}).toArray(function(err, docs) {
        assert.strictEqual(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
};

client.connect(function(err) {
    assert.strictEqual(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    findDocuments(db, function() {
      client.close();
    });
  });