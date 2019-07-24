const routes = (app) => {
  app.route('/contact')
  .get((req,res, next) => {
    res.send("You hit the contact route")
  })
}

export default routes