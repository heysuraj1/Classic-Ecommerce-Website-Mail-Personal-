import mongoose from 'mongoose'

function initDB(){
    if(mongoose.connections[0].readyState){
        console.log('already connected')
        return
    }

    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : true,
        // useNewUrlParser:true,
        useUnifiedTopology:true

    })
    mongoose.connection.on('connected',()=>{
        console.log('connected sucessfully')
    })
    mongoose.connection.on('error',(err)=>{
        console.log('kuch gadbad hai yar aur vo ye hai ki =>',err)
    })
}


export default initDB; 