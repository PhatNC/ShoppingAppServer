import mongoose from '../../helpers/connection';
import Account from './model';

export const login = ({ body: { email, password } }, res) => {
  Account.findOne(body, function (err, account) {
    if (err) throw err;
    res.send(account);
  });
}

export const logout = ({ bearer }, res) => {
  let result = { status: 0, msg: 'Logout failure' };

  if (bearer) {
    result = { status: 1, msg: 'Logout success' };
  }

  res.json(result);
}
