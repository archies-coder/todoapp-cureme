const PORT = process.env.PORT || 8000
const serverRunningCallBack = () => {
    console.log(`Server Running On Port ${PORT}`)
}

module.exports = {
    PORT,
    serverRunningCallBack
}