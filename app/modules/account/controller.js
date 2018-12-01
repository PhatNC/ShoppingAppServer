import Account from './model';

export const login = (req, res) => {
  const condition = req.body;
  Account.findOne(condition, function (err, account) {
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

// Get Accounts
export function getAccounts(req, res) {
  const condition = req.query;
  condition.name = new RegExp(condition.name, 'i');
  console.log(req.query);
  Account.find({ ...condition, ...{ enableFlg: 1 } }, function (err, accounts) {
    if (err) throw err;
    res.send(accounts);
  });
}

// Add new Account
export function addAccount(req, res) {
  const accountInfo = req.body;
  console.log(req.body);

  if (!accountInfo) {
    console.log('========================')
    console.log('Error');
    res.send("Add failed!")
  }
  else {
    const newAccount = new Account(accountInfo);
    console.log('========================')
    console.log(newAccount);
    newAccount.save(function (err) {
      if (err) return console.log('Error!', err);
      console.log('Data saved!')
      res.send(newAccount);
    })
  }
}

// Update account by ID
export function updateAccount(req, res) {
  const id = req.query._id;
  const accountInfo = req.body;

  if (!accountInfo) {
    console.log('========================')
    console.log('Error');
    res.send("Update failed!")
  }
  else {
    Account.findByIdAndUpdate({ _id: id }, accountInfo, function (err, res) {
      if (err) return console.log('Error!', err);
      console.log('Update successful!');
    })
  }
}

// Delete account by ID
export function deleteAccount(req, res) {
  const id = req.query._id;

  Account.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
    if (err) return console.log('Error!', err);
    console.log('Delete successful!');
  })

}