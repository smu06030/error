exports.handler = async function(event, context){
  return {
    statusCode : 200,
    body: JSON.stringify({
      name: 'smu06030',
      age : 23,
      email: 'smu06030@naver.com'
    })
  }
}