export default {
  // 此处不再传入state而是传入context(上下文，可以理解成整个$store)
  // 必须这样做
  actionUpdateInfo(context, payload) {
    setTimeout(() => {
      // 不能直接对数据进行操作，而是调用mutation
      context.commit('updateInfo')
      console.log(payload)
    }, 3000)
  }
}
