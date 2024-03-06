import mongoose from "mongoose"


const connection = async(username,password) =>{
    const URL=`mongodb://${username}:${password}@ac-dgdikqc-shard-00-00.zbvyucr.mongodb.net:27017,ac-dgdikqc-shard-00-01.zbvyucr.mongodb.net:27017,ac-dgdikqc-shard-00-02.zbvyucr.mongodb.net:27017/?ssl=true&replicaSet=atlas-b81wpa-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('database connection successfully');

    }catch (error){
        console.log('database not connect',error);
    }
}

export default connection;