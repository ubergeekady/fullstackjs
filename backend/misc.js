const mongoose = require('mongoose')

try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline)
} catch (error) {
    console.log(error)
    console.log("Db Error")
    process.exit(1)
}

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    }
},{
    timestamps: true
})

model = mongoose.model('Goal', goalSchema)

await model.find({user: req.user.id})

