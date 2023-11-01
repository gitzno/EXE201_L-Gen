module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/L-genDeploy/' // Thay tên repository của các bạn vào đây nhé
    : '/'
}