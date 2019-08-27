const misc = (app) => {
  //CATCH NOT FOUND ERROR MIDDLEWARE
  app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  })

  //CATCH ALL OTHER ERRORS MIDDLEWARE
  app.use((error, req, res, next)=> {
    res.status(error.status || 500).json({
      error: {
        message: error.message
      }
    })
  })

  //HANDLE HEADERS MIDDLEWARE AND CORS ERRORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === "OPTIONs") {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    return res.status().json({});
  }
  next();
})
}


export default misc;
