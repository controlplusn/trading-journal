const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    verificationToken: String
})

// User model
export const User = mongoose.model('User', userSchema);