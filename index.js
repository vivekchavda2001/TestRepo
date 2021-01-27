const ex = require('express')
const app = ex();
app.get('/',(req,res)=>{
    res.send("Working");
})
app.listen(process.env.PORT || 5000, ()=>{
    console.log("started");
});