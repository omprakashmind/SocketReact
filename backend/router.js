const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.send('SERVER IS RUNNING AND ')
})





module.exports=router;