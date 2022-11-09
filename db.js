import mongoose from "mongoose";

const conn = () => {
  console.log(process.env.DB_URI);

  mongoose
    .connect(process.env.DB_URI, {
      dbName: "lenslight_tr",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log(`db connection error. ${err}`);
    });
};

export default conn;
