import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true, 'product name missing!']
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
},
{
    timestamps: true
}
)


export const Product = mongoose.model('Product', productSchema)