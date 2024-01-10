var KJUR = require("https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/10.9.0/jsrsasign-all-min.js")
 




function generateSignature(sdkKey, sdkSecret, sessionName, role) {

    const iat = Math.round(new Date().getTime() / 1000) - 30
    const exp = iat + 60 * 60 * 2
    const oHeader = { alg: 'HS256', typ: 'JWT' }
  
    const oPayload = {
      app_key: sdkKey,
      tpc: sessionName,
      role_type: role,
      version: 1,
      iat: iat,
      exp: exp
    }
  
    const sHeader = JSON.stringify(oHeader)
    const sPayload = JSON.stringify(oPayload)
    const sdkJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret)
    return sdkJWT
  }





function testResults(form) {
    console.log(generateSignature(form.clientID.value, form.clientSecret.value, 'Test Session', 1))
}
