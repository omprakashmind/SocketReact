const users=[]

const addUsers=({id,name,room})=>{
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const existingUser=users.find((user)=>user.room===room && user.name===name);

    if(existingUser){
        return {error:'Username is taken'}
    }

   const user={id,name,room};
   users.push(user);
   return {user};
}

const removeUsers=(id)=>{
    const index=users.findIndex((user)=>user.id===id);

    if(index!==-1)
    {
        return users.splice(index,1)[0];
    }
}

const getUsers=(id)=>users.find((user)=>user.id===id);

const getUserInRoom=(room)=>users.filter((room)=>user.room===room);



module.exports={addUsers,removeUsers,getUsers,getUserInRoom};