const mongoose = require('mongoose');
const uri=process.env.MONGO_URI;
async function main() {
  await mongoose.connect(uri);
}

main().then(()=>console.log("Successfully connected to the DB"));
main().catch(err => console.log(err))
