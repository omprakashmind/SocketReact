const express=require('express');
const socketio=require('socket.io');
const http=require('http');

const app=express();

const router=require('./router');

const {addUsers,removeUser,getUser,getUserInRoom} =require('./users.js')


const PORT =process.env.PORT || 8080;
const server=http.createServer(app);


const io=socketio(server);

io.on('connection',(socket)=>{
    console.log('We have a new conenction')


    socket.on('join',({name,room},callback)=>{
        console.log(name,room)

    // const error=true;
    // if(error){
    //     callback({error:'error'})
    // }    

    callback();
    })
    

   socket.on('disconnect',()=>{
       console.log('USER HAS LEFT ')
   })
})



app.use(router);


server.listen(PORT,()=>console.log('server has started on port' + PORT));
