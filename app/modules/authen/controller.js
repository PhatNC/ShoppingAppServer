export const login = ({ body: { username, password } }, res) => {
  let result = { status: 0, msg: 'Login failure' };

  if (username === 'duyetvv' && password === '111111') {
    result = { status: 1, msg: 'Login success' };
  }

  res.json(result);
}

export const logout = ({ bearer }, res) => {
  let result = { status: 0, msg: 'Logout failure' };

  if (bearer) {
    result = { status: 1, msg: 'Logout success' };
  }

  res.json(result);
}
