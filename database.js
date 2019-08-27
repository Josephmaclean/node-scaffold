import mongoose from 'mongoose'
require('dotenv').config()


export default () => {

  //CONNECT TO DATABASE
  mongoose.connect(process.env.DB, {
     useNewUrlParser: true ,
     useCreateIndex: true,
     useFindAndModify: false
    });

    //HANDLE ERRORS AFTER CONNECTION IS ESTABLISHED
    mongoose.connection.on('error', err => {
    // logError(err);
    console.log(err);
  });
}