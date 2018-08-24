module.exports = async ( ctx ) => {
  const title = 'admin page'
  await ctx.render('admin', {
    title,
  })
}