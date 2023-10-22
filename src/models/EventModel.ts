import mongoose from "mongoose";

const EventSchema =new mongoose.Schema({
    ename:{
        type:String,
        required:[true,"please mention the event name/title for the "]
    },
    evenue:{
        type:String,
        required:[true,"please the mention the event venue"]
    },
    edetails:{
        type:String,
        required:[true,"please provide more details about the event"],
    },
    edate:{
        type:String,
        required:[true,"Please enter a valid date of the event"],
    },
    lastdate:{
        type:String,
        required:[true,"Please enter a valid deadline to apply for this event"],
    },
    eurl:{
        type:String,
        required:[true,"provide url for the event registration"]
    }
})

const Events=mongoose.models.events||mongoose.model("events",EventSchema)

export default Events;