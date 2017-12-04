var Blink = require('node-blink-security')
function setupSystem(){
  var blink = new Blink('', '', {_token: process.env.BLINK_AUTH_TOKEN, _region_id: process.env.BLINK_REGION_ID, _network_id:process.env.BLINK_NETWORK_ID});
  return blink.setupSystem().then(() => blink)
}

exports.handler = (event, context, callback) => {
    // default params
    var params = {
      armed: true,
      message: "no change made"
    }
    switch(event.clickType){
      case 'SINGLE':
        params = {armed: true, message: "ARMED set"}
      break;
      case 'DOUBLE':
        params = {armed: false, message: "DIS-armed set"}
      break;
      default:
        callback("clickType != (SINGLE, DOUBLE)", params)
        return
      break;
    }
    // do the work
    setupSystem()
    .then((blink) => {
      return blink.setArmed(params.armed)
        .then(()=> {
          callback(null, params)
        })
    })
    .catch((error) => {
      callback(error, params)
    })
};
