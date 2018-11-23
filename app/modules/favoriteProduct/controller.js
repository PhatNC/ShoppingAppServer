import FavoriteProduct from './model';

// Get FavoriteProducts
export function getFavoriteProducts(req, res) {
    const condition = req.query;
    condition.name = new RegExp(condition.name, 'i');
    console.log(req.query);
    FavoriteProduct.find({ ...condition, ...{ enableFlg: 1 } }, function (err, favoriteProducts) {
        if (err) throw err;
        res.send(favoriteProducts);
    });
}

// Add new FavoriteProduct
export function addFavoriteProduct(req, res) {
    const favoriteProductInfo = req.body;
    console.log(req.body);

    if (!favoriteProductInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Add failed!")
    }
    else {
        const newFavoriteProduct = new FavoriteProduct(favoriteProductInfo);
        console.log('========================')
        console.log(newFavoriteProduct);
        newFavoriteProduct.save(function (err) {
            if (err) return console.log('Error!', err);
            console.log('Data saved!')
            res.send(newFavoriteProduct);
        })
    }
}

// Update favoriteProduct by ID
export function updateFavoriteProduct(req, res) {
    const id = req.query._id;
    const favoriteProductInfo = req.body;

    if (!favoriteProductInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Update failed!")
    }
    else {
        FavoriteProduct.findByIdAndUpdate({ _id: id }, favoriteProductInfo, function (err, res) {
            if (err) return console.log('Error!', err);
            console.log('Update successful!');
        })
    }
}

// Delete favoriteProduct by ID
export function deleteFavoriteProduct(req, res) {
    const id = req.query._id;

    FavoriteProduct.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
        if (err) return console.log('Error!', err);
        console.log('Delete successful!');
    })

}