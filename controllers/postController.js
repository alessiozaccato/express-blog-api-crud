const arrayPosts = require("../data/posts");

function index(req, res) {

    // res.send('Lista delle pizze');
    res.json(arrayPosts);

}
function show(req, res) {
    // res.send('Dettagli del post ' + req.params.id);

    const id = parseInt(req.params.id)


    const post = arrayPosts.find(post => post.id === id);


    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovato"
        })
    }


    res.json(post);
}

function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function patch(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {

    // res.send('Eliminazione del post' + req.params.id);


    const id = parseInt(req.params.id)


    const post = arrayPosts.find(post => post.id === id);


    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovato"
        })
    }



    arrayPosts.splice(arrayPosts.indexOf(post), 1);

    res.sendStatus(204)

    console.log(arrayPosts);
}

// let's exports everything
module.exports = { index, show, store, update, patch, destroy }
