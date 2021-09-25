const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  imageURL:{
    type: String,
    required: true
  },
  Date:{
    type: Date,
    required: true
  },
  UserId:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

module.exports=mongoose.model('Product',productSchema);