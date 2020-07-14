const { Router } = require('express');
const router = Router();

const { getNotes, createNote,getNote,updateNote,deleteNote} = require("../controllers/notes_controllers");

router.route('/')
    .get(getNotes)
    //Agregar un nuevo dato
    .post(createNote);

router.route('/:id')
    .get(getNote)
    //Actualizar un nuevo dato
    .put(updateNote)
    //Elminiaar un dato
    .delete(deleteNote);
    //Nos permite actualizar solo un dato de la nota
    //.patch()
module.exports = router;