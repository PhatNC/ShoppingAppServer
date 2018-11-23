import Product from './model';

// Get Products
export function getProducts(req, res) {
    const condition = req.query;
    condition.name = new RegExp(condition.name, 'i');
    console.log(req.query);
    Product.find({ ...condition, ...{ enableFlg: 1 } }, function (err, products) {
            if (err) throw err;
            res.send(products);
        });
}

// Add new Product
export function addProduct(req, res) {
    const productInfo = req.body;
    console.log(req.body);

    if (!productInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Add failed!")
    }
    else {
        const newProduct = new Product(productInfo);
        console.log('========================')
        console.log(newProduct);
        newProduct.save(function (err) {
            if (err) return console.log('Error!', err);
            console.log('Data saved!')
            res.send(newProduct);
        })
    }
}

// Update product by ID
export function updateProduct(req, res) {
    const id = req.query._id;
    const productInfo = req.body;

    if (!productInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Update failed!")
    }
    else {
        Product.findByIdAndUpdate({ _id: id }, productInfo, function (err, res) {
            if (err) return console.log('Error!', err);
            console.log('Update successful!');
        })
    }
}

// Delete product by ID
export function deleteProduct(req, res) {
    const id = req.query._id;

    Product.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
        if (err) return console.log('Error!', err);
        console.log('Delete successful!');
    })

}