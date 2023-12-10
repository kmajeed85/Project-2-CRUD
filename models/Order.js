//mongoose depndancy
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
 //this need to be checked
name:String,
totalPrice:Number,
startDate:Date,
endDate:Date,
status:String,
products:[{
    type:mongoose.Schema.Types.ObjectId
}]
},{
    timestamps:true
}
);
//create model
const Order = mongoose.model('Order',orderSchema);

//export 
module.exports = {Order}