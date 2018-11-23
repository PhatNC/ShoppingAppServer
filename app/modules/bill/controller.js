import Bill from './model';

// Get Bills
export function getBills(req, res) {
    const condition = req.query;
    condition.name = new RegExp(condition.name, 'i');
    console.log(req.query);
    Bill.find({ ...condition, ...{ enableFlg: 1 } }, function (err, bills) {
        if (err) throw err;
        res.send(bills);
    });
}

// Add new Bill
export function addBill(req, res) {
    const billInfo = req.body;
    console.log(req.body);

    if (!billInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Add failed!")
    }
    else {
        const newBill = new Bill(billInfo);
        console.log('========================')
        console.log(newBill);
        newBill.save(function (err) {
            if (err) return console.log('Error!', err);
            console.log('Data saved!')
            res.send(newBill);
        })
    }
}

// Update bill by ID
export function updateBill(req, res) {
    const id = req.query._id;
    const billInfo = req.body;

    if (!billInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Update failed!")
    }
    else {
        Bill.findByIdAndUpdate({ _id: id }, billInfo, function (err, res) {
            if (err) return console.log('Error!', err);
            console.log('Update successful!');
        })
    }
}

// Delete bill by ID
export function deleteBill(req, res) {
    const id = req.query._id;

    Bill.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
        if (err) return console.log('Error!', err);
        console.log('Delete successful!');
    })

}