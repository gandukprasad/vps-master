var express = require("express")
const compute = require('@google-cloud/compute');
const {InstancesClient} = require('@google-cloud/compute').v1;

const port = process.env.PORT || 3001


require("dotenv").config();
var app = express()






app.get("/mainAPI", (req, res, next) => {


  console.log("tested")
    const instanceID = '' +req.query.instance;
    const zoneID = ''+req.query.zone
   

  const computeClient = new InstancesClient();

  async function callStart() {
    const request = {
      instance:instanceID,
      project:'fabled-frame-383008',
      zone:zoneID,
    };

    // Run request
    const response = await computeClient.get(request)
    console.log(response[0])
      res.send(JSON.stringify(
          {data:response}
      ))
  }

  callStart();
}
)

app.get("/test", (req,res) => {
  res.send("working")
})


app.listen(port, () => {
  console.log("listening at port :3001");
})




