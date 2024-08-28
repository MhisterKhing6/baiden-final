import {model, Schema } from "mongoose";
const NonMoneyDonations = new Schema({
    name:  {type:String, required:true},
    itemType: {type:String, required:true},
    itemDescription: {type:String},
    location : {type:String, required:true},
    deliveryDate : {type:String, required:true},
})

//create a model
let NonMoneyDonationModel = model("NonMoneyDonation", NonMoneyDonations)
export {NonMoneyDonationModel}
