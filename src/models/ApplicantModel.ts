import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: [true, "applicant must have an unique emailid"]
    },
    jobid: {
        type: String,
        required: [true, "job id"]
    },
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Applicant must have a valid email"],
    },
    phoneNumber: {
        type: String,
        required: [true, "phone number is required"]
    },
    address: {
        address: {
            type: String,
            required: [true, "address is required"]
        },
        city: {
            type: String,
            required: [true, "city is required"]
        },
        state: {
            type: String,
            required: [true, "state is required"]
        },
        country: {
            type: String,
            required: [true, "country is required"]
        },
        pincode: {
            type: String,
            required: [true, "pin code is required"]
        },
    },

    matric: {
        schooln: {
            type: String
        },
        year: {
            type: Number
        },
        board: {
            type: String
        },
        percentage: {
            type: String
        },
        address: {
            type: String
        },
    },
    hse: {
        instname: {
            type: String
        },
        year: {
            type: Number
        },
        board: {
            type: String
        },
        percentage: {
            type: String
        },
        address: {
            type: String
        },
    },
    curstudy: {
        instname: {
            type: String
        },
        passyear: { type: Number },
        address: { type: String },
    },
    skills: [{
        type: String
    }],
    yearofexp: {
        type: String
    },
    status:{
        type:String
    }



})


const Applicants = mongoose.models.applicants || mongoose.model("applicants", ApplicantSchema)

export default Applicants;