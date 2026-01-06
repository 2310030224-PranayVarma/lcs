const express = require('express')
import { getlcs } from "./util";
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/name',(req,res)=>
{
  res.send("Pranay")
})
app.get('/lcs',(req,res)=>{
  const l = getlcs("VARUN","ARUN");
  console.log(l);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})