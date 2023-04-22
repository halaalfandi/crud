const { json } = require('body-parser');
const { Router } = require('express');
const express = require('express');
const bookRouter = express.Router();
const book=require('../Model/bookmodel')

 
bookRouter.route('/').get((req,res)=>{
  book.find({},(err,book)=>
  {
    if(err){
      res.statusCode(404),json({msg:'no book'})
    }
    res.json(book)
  })
})

.post((req,res)=>{
 let books=new book( req.body )
 books.save()
 res.status(201).json(books)
})

bookRouter.route('/:bookId')
.put((req,res)=>{
   book.findById(req.params.bookId,(err,book)=>{
    book.first_name=req.body.first_name,
    book.last_name=req.body.last_name,
    book.start_date=req.body.start_date,
    book.end_date=req.body.end_date
    book.save()
    res.json()
   })
})

.delete((req,res)=>{
  book.findById(req.params.bookId,(err,book)=>{
    book.remove(err=>{
      if(err){
        res.status(500).send(err)
      }
      res.status(204).send(book)
    })
  })
})

module.exports = bookRouter;
