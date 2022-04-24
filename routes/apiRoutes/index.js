const router = require('express').Router();
const  {notes}  = require('../../data/db.json');
const path = require("path")
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// const result = notes.filter(note => note.id != req.params.id);
// console.log(result)





function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../data/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  }

  router.delete('/notes/:id', (req, res) => {
    let result = notes.filter(note => note.id != req.params.id);
console.log(result)
fs.writeFileSync(
    path.join(__dirname, '../../data/db.json'),
    JSON.stringify({ notes: result }, null, 2)
  )
res.json(result)
    
  })

  router.get('/notes',(req,res) => {
    result = notes
res.json(result)
})

function validateNote(note) {
     if (!note.title || typeof note.title !== 'string') {
        return false;
      }
      if (!note.text || typeof note.text !== 'string') {
        return false;   
}
return true };

router.post('/notes',(req,res) => {
    
req.body.id = uuidv4();

     // if any data in req.body is incorrect, send 400 error back
     if (!validateNote(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
      } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
      }
    });
    

  


module.exports=router