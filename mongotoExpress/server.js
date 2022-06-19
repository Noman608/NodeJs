const mongoose = require("mongoose");
var validator = require('validator');
mongoose.connect("mongodb://localhost:27017/TEST");

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email is invalid");
      }
    }
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
const Playlist = new mongoose.model("Playlist", playlistSchema);

const creatDocument = async () => {
  try {
//     const reactPaylist = new Playlist({
//       name: "React Js",
//       ctype: "Front End",
//       videos: 80,
//       author: "Abdullah",
//       active: true,
//     });
    const javaScript = new Playlist({
      name: "JavaScript Js",
      email:"abdullah.noman",
      ctype: "Front End",
      videos: 150,
      author: "Al",
      active: true,
    });
//     const Nodejs = new Playlist({
//       name: "Node Js",
//       ctype: "Back End",
//       videos: 50,
//       author: "Noman",
//       active: true,
//     });
//     const result = await Playlist.insertMany([javaScript,Nodejs,reactPaylist]);
     const result =  await javaScript.save();
     console.log(result);
   } catch (error) {
    console.log(error);
   }
};
creatDocument();

// const getDocument = async ()=>{
//   const result = await Playlist
//   .find()
//   .select({videos:3})
//   .sort({videos:1});
//   console.log(result);
// }
// getDocument();

// const updateDocuments = async(_id) =>{ 
//  try {
//   const result = await Playlist.updateOne({_id},{$set:{name:'javaScript'}});
//   console.log(result);
//  } catch (error) {
//   console.log(error);
//  }
// }
// updateDocuments('62aad448f19d04c5f8c845f7');



// const deleteTheDocuments = async (_id) => {
// try {
//  const result= await Playlist.deleteOne({_id});
// } catch (error) {
//   console.log(error);
// }
// }
// deleteTheDocuments('62aad448f19d04c5f8c845f7');