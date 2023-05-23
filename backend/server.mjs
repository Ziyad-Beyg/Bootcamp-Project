import express from 'express'
import mongoose from 'mongoose'
import { Product } from './Models/productModel.mjs'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("/ API called")
})

// GET PRODUCT BY ID
app.get('/product/:id', async(req, res)=> {
    try{
        const {id} = req.params
        const singleProduct = await Product.findById(id);
        res.status(200).json(singleProduct)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})

// GET ALL PRODUCTS
app.get('/products', async(req, res)=> {
    try{
        const allProducts = await Product.find()
        res.status(200).json(allProducts)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})

// POST PRODUCTS
app.post('/product', async(req, res) => {
try{
    const dbProduct = await Product.create(req.body);
    res.status(200).json(dbProduct)
}
catch(e){
    console.log(e.message)
    res.status(500).json({message: e.message})
}
})


// UPDATE PRODUCT
app.put('/product/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const productUpdate = await Product.findByIdAndUpdate(id, req.body)
        if(!productUpdate){
            res.status(404).json(`error #404, product not found on id: ${id}`)
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})

// DELETE A PRODUCT
app.delete('/product/:id', async(req, res)=> {
    try{
        const {id} = req.params
        const deleteProduct = await Product.findByIdAndDelete(id)
        if(!deleteProduct){
            res.status(404).json(`error #404, product not found on id: ${id}`)
        }
        res.status(200).json(deleteProduct)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})

mongoose.connect('mongodb+srv://baiggziycontour:9211420@be-fit.izi31cz.mongodb.net/BE-FIT?retryWrites=true&w=majority')
.then(()=> {
    console.log("MongoDB Connected!!!")

    app.listen( 8080, () => {
        console.log("NODE SERVER RUNNING ON PORT 8080")
    }) 
})
.catch((e)=>{
    console.log(e.message)
})