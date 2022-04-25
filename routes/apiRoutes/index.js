// sets this as a router
const router = require('express').Router();
// tells where to look for a the data, but doesn't declare it as const so that I can change it when I delete.
let  {notes}  = require('../../data/db.json');
const path = require("path")
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');





// creates a new note and adds it to the notes array, then saves that to the json
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../data/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  }


//   deletes a  with a given id
  router.delete('/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id != req.params.id);
console.log(result)
fs.writeFileSync(
    path.join(__dirname, '../../data/db.json'),
    JSON.stringify({ notes: result }, null, 2)
  )
res.json(notes)
    
  })

//   shows the notes on screen
  router.get('/notes',(req,res) => {
    result = notes
res.json(result)
})


// validates a new note before it is saved
function validateNote(note) {
     if (!note.title || typeof note.title !== 'string') {
        return false;
      }
      if (!note.text || typeof note.text !== 'string') {
        return false;   
}
return true };


// post request with the data to save a new note
router.post('/notes',(req,res) => {
    
    // gives a unique id
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