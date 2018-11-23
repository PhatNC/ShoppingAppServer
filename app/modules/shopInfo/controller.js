import Shop from './model';

// Get Shops
export function getShops(req, res) {
    const condition = req.query;
    condition.name = new RegExp(condition.name, 'i');
    console.log(req.query);
    Shop.find({ ...condition, ...{ enableFlg: 1 } }, function (err, shops) {
        if (err) throw err;
        res.send(shops);
    });
}

// Add new Shop
export function addShop(req, res) {
    const shopInfo = req.body;
    console.log(req.body);

    if (!shopInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Add failed!")
    }
    else {
        const newShop = new Shop(shopInfo);
        console.log('========================')
        console.log(newShop);
        newShop.save(function (err) {
            if (err) return console.log('Error!', err);
            console.log('Data saved!')
            res.send(newShop);
        })
    }
}

// Update shop by ID
export function updateShop(req, res) {
    const id = req.query._id;
    const shopInfo = req.body;

    if (!shopInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Update failed!")
    }
    else {
        Shop.findByIdAndUpdate({ _id: id }, shopInfo, function (err, res) {
            if (err) return console.log('Error!', err);
            console.log('Update successful!');
        })
    }
}

// Delete shop by ID
export function deleteShop(req, res) {
    const id = req.query._id;

    Shop.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
        if (err) return console.log('Error!', err);
        console.log('Delete successful!');
    })

}