const PORT = process.env.PORT || 8000
const serverRunningCallBack = () => {
  console.log(`Server Running On Port ${PORT}`)
}
const dbURI = 'mongodb://localhost:27017/todoapp'

module.exports = {
  PORT,
  serverRunningCallBack,
  dbURI
}
