const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema=mongoose.Schema;
const Car = new Schema({
    name:String,
    type:String,
    price:Number,
},{ collection: 'maruti' });


let model=mongoose.model('model',Car);

let car=new model({
    name:"swift",
    type:"hatchback",
    price:750000
});


const db=mongoose.connection;

db.on('error', function (err) { throw err }); 

 db.once('open', function callback() {
   console.log('connected!');

   /* car.save((err,data)=>{
    if(err){
        return err;
        db.close()
    }
    else{
        console.log(`${db.name} data saved`);
        db.close();
    }
   })  */

   model.find({type:"hatchback"},(err,data)=>{
        if(err){console.log(err)}
        else{ 
            if( data.length==0){
                console.log("Data not found")
            }
            else{
                console.log(data);
            }

        }
    });

}); 
