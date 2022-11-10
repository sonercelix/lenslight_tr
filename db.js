import mongoose from "mongoose";

const conn = () => {
  console.log(process.env.DB_URI);
  const option = {
    dbName: "lenslight_tr",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(process.env.DB_URI, option)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log(`db connection error. ${err}`);
    });
};

export default conn;
