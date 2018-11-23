import Category from './model';

// Get Categorys
export function getCategories(req, res) {
    const condition = req.query;
    condition.name = new RegExp(condition.name, 'i');
    console.log(req.query);
    Category.find({ ...condition, ...{ enableFlg: 1 } }, function (err, categories) {
        if (err) throw err;
        res.send(categories);
    });
}

// Add new Category
export function addCategory(req, res) {
    const categoryInfo = req.body;
    console.log(req.body);

    if (!categoryInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Add failed!")
    }
    else {
        const newCategory = new Category(categoryInfo);
        console.log('========================')
        console.log(newCategory);
        newCategory.save(function (err) {
            if (err) return console.log('Error!', err);
            console.log('Data saved!')
            res.send(newCategory);
        })
    }
}

// Update category by ID
export function updateCategory(req, res) {
    const id = req.query._id;
    const categoryInfo = req.body;

    if (!categoryInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Update failed!")
    }
    else {
        Category.findByIdAndUpdate({ _id: id }, categoryInfo, function (err, res) {
            if (err) return console.log('Error!', err);
            console.log('Update successful!');
        })
    }
}

// Delete category by ID
export function deleteCategory(req, res) {
    const id = req.query._id;

    Category.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
        if (err) return console.log('Error!', err);
        console.log('Delete successful!');
    })

}