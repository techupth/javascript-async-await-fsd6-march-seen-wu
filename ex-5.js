// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function asynchronousFunction(){
  try{
    const displayJohnProfile = await getJohnProfile()
    console.log(displayJohnProfile)
  }catch (error){
    console.log(error)
  }
}
asynchronousFunction()