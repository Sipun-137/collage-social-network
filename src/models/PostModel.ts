import mongoose from "mongoose";

const PostSchema =new mongoose.Schema({
    ademail:{
        type:String,
        required:[true,"this is the recruiter email address"]
    },
    type:{
        type:String
        ,required:[true,"this is for the internship or job"]
    },
    cname:{
        type:String,
        required:[true,"Please provide a name"],
    },
    address:{
        type:String,
        required:[true,"please provide the address of the company"]
    },
    tnovacan:{
        type:Number,
        required:[true,"please mention total number of vacancies"]
    },
    details:{
        type:String,
        required:[true,"mention the description of the job"]
    },
    wtype:{
        type:String,
        required:[true,"mention the work type it is work from home or on location"]
    },
    duration:{
        type:String,
        required:[true,"duraton of the job"]
    },
    title:{
        type:String,
        required:[true,"please mention the opening title for the job"]
    },
    enddate:{
        type:String,
        required:[true,"mention the last date of the job application "]
    },
    joiningdt:{
        type:String,
        required:[true,"please specify the date from which the job is started"]
    },skills:[{
        type:String,
        required:[true,"please mention the skills required for this post"]
    }],salary:{
        type:Number,
        required:[true,"mention the salary for this job"],
    },eligibility:{
        type:String,
        required:[true,'mention the eligibility for this post']
    }
})

const Posts=mongoose.models.posts||mongoose.model("posts",PostSchema)

export default Posts;