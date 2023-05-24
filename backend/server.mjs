import express from 'express'
import mongoose from 'mongoose'
import { WorkOut } from './Models/workoutModel.mjs'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.send("/ API called")
})

// GET PRODUCT BY ID
app.get('/workout/:id', async(req, res)=> {
    try{
        const {id} = req.params
        const singleWorkout = await WorkOut.findById(id);
        res.status(200).json(singleWorkout)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})

// GET ALL PRODUCTS
app.get('/workouts', async(req, res)=> {
    try{
        const allWorkouts = await WorkOut.find()
        res.status(200).json(allWorkouts)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})

// POST PRODUCTS
app.post('/workout', async(req, res) => {
try{
    const postWorkouts = await WorkOut.create(req.body);
    res.status(200).json(postWorkouts)
}
catch(e){
    console.log(e.message)
    res.status(500).json({message: e.message})
}
})


// UPDATE PRODUCT
app.put('/workout/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const workoutUpdate = await WorkOut.findByIdAndUpdate(id, req.body)
        if(!workoutUpdate){
            res.status(404).json(`error #404, product not found on id: ${id}`)
        }
        const updatedWorkout = await WorkOut.findById(id)
        res.status(200).json(updatedWorkout)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
}) 

// DELETE A PRODUCT
app.delete('/workout/:id', async(req, res)=> {
    try{
        const {id} = req.params
        const deleteWorkout = await WorkOut.findByIdAndDelete(id)
        if(!deleteWorkout){
            res.status(404).json(`error #404, product not found on id: ${id}`)
        }
        res.status(200).json(deleteWorkout)
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