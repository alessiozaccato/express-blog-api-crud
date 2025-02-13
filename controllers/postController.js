const arrayPosts = require("../data/posts");

function index(req, res) {

    // res.send('Lista delle pizze');

    // res.json(arrayPosts);

    let filteredPosts = arrayPosts;


    if (req.query.tags) {
        filteredPosts = arrayPosts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }


    res.json(filteredPosts);

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
    // res.send('Creazione nuovo post');
    const newId = arrayPosts[arrayPosts.length - 1].id + 1;

    // Creiamo un nuovo oggetto pizza
    const newPost = {
        id: newId,
        title: req.body.title,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiungiamo la nuova pizza al arrayPizzas
    arrayPosts.push(newPost);

    // controlliamo
    console.log(arrayPosts);


    // Restituiamo lo status corretto e la pizza appena creata
    res.status(201);
    res.json(newPost);
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

    res.sendStatus(204);

}

// let's exports everything
module.exports = { index, show, store, update, patch, destroy }
