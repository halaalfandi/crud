const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookModel=new Schema({
        first_name : { type: String},
        last_name :  { type: String},
        end_date :   { type: String},
        start_date:  { type: String}
})

mongoose.set('strictQuery', false);
module.exports = mongoose.model('book' ,bookModel)