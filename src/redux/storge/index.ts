export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token === null) {
    throw new Error("token不存在,资源请求无效");
  }
  return token;
};
