import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'Inventory type required'],
        enum:['in','out']
    },
    bloodGroup:{
        type:String,
        required:[true,'blood group is required'],
        enum:['O+','O-','AB+','AB-','A+','A-','B+','B-']
    },
    quantity:{
        type:Number,
        required:[true,'blood quantity is required']
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organisation is required']
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
            return this.inventoryType ==='out'
        }
    },
    donar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
            return this.inventoryType === 'in'
        }
    }
},{timestamps:true}
)

export const Inventory = mongoose.model("Inventory",inventorySchema)