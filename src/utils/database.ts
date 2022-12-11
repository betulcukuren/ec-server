import * as mongoose from "mongoose";

let database: mongoose.Connection;
export const connect = () => {
  // add your own uri below
  const uri = `${process.env.MONGODB_URI}`;

  mongoose.set('strictQuery', false);
  mongoose
  .connect(uri, { retryWrites: true, w: 'majority' })
    .then(() => {
      console.log('Connected to mongoDB.');
    })
    .catch((error) => {
      console.log('Unable to connect.');
      console.log(error);
    });

}
