import Comment from './model';

// Get Comments
export function getComments(req, res) {
    const condition = req.query;
    condition.name = new RegExp(condition.name, 'i');
    console.log(req.query);
    Comment.find({ ...condition, ...{ enableFlg: 1 } }, function (err, comments) {
        if (err) throw err;
        res.send(comments);
    });
}

// Add new Comment
export function addComment(req, res) {
    const commentInfo = req.body;
    console.log(req.body);

    if (!commentInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Add failed!")
    }
    else {
        const newComment = new Comment(commentInfo);
        console.log('========================')
        console.log(newComment);
        newComment.save(function (err) {
            if (err) return console.log('Error!', err);
            console.log('Data saved!')
            res.send(newComment);
        })
    }
}

// Update comment by ID
export function updateComment(req, res) {
    const id = req.query._id;
    const commentInfo = req.body;

    if (!commentInfo) {
        console.log('========================')
        console.log('Error');
        res.send("Update failed!")
    }
    else {
        Comment.findByIdAndUpdate({ _id: id }, commentInfo, function (err, res) {
            if (err) return console.log('Error!', err);
            console.log('Update successful!');
        })
    }
}

// Delete comment by ID
export function deleteComment(req, res) {
    const id = req.query._id;

    Comment.findByIdAndUpdate({ _id: id }, { enableFlg: 0 }, function (err, res) {
        if (err) return console.log('Error!', err);
        console.log('Delete successful!');
    })

}