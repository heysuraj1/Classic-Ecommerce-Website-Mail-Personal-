import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({

    name:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true

    },
    description:{
        type: String,
        required : true

    },
    mediaUrl:{
        type: String,
        required : true
    },
    collect:{
        type: String,
        required : true
    }
    
    

})
productSchema.index({ name: 'text',description:'text'});  //<======< this is imp. for search func 
export default mongoose.models.product || mongoose.model('product',productSchema);