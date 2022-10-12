export const getUsers = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const allUser = await response.json();

  return allUser;
};
