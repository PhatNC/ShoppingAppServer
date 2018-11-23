import BillDetail from './model';

// Get BillDetails
export function getBillDetails(req, res) {
    const condition = req.query;
    condition.name = new RegExp(condition.name, 'i');
    console.log(req.query);
    BillDetail.find({ ...condition, ...{ enableFlg: 1 } }, function (err, billDetails) {
        if (err) throw err;
        res.send(billDetails);
    });
}

// Add new BillDetail
export function addBillDetail(req, res) {
    const billDetailInfo = req.body;
    console.log(req.body);

    if (!billDetailInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Add failed!")
    }
    else {
        const newBillDetail = new BillDetail(billDetailInfo);
        console.log('========================')
        console.log(newBillDetail);
        newBillDetail.save(function (err) {
            if (err) return console.log('Error!', err);
            console.log('Data saved!')
            res.send(newBillDetail);
        })
    }
}

// Update billDetail by ID
export function updateBillDetail(req, res) {
    const id = req.query._id;
    const billDetailInfo = req.body;

    if (!billDetailInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Update failed!")
    }
    else {
        BillDetail.findByIdAndUpdate({ _id: id }, billDetailInfo, function (err, res) {
            if (err) return console.log('Error!', err);
            console.log('Update successful!');
        })
    }
}

// Delete billDetail by ID
export function deleteBillDetail(req, res) {
    const id = req.query._id;

    BillDetail.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
        if (err) return console.log('Error!', err);
        console.log('Delete successful!');
    })

}