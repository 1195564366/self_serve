export const success = (data = null, msg = '操作成功') => {
  return {
    code: 200,
    msg,
    data
  }
}

export const error = (msg = '操作失败') => {
  return {
    code: 500,
    msg,
    data: null
  }
}