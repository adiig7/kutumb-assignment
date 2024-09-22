export const getTokenFromStorage = () => {
  const { token } = JSON.parse(sessionStorage.getItem("tokenData"));
  return token;
};