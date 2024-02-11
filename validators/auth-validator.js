const {z} = require("zod")

//creating an object schema
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message: "Name must be at least of 3 char"})
    .max(40,{message: "Name must not be more than 40 char"
    }),

    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email-address"})
    .min(10,{message: "email must be at least of 10 char"})
    .max(50,{message: "email must not be more than 40 char"
    }),
    
    password: z
    .string({required_error:"Name is required"})
    .min(3,{message: "Name must be at least of 3 char"})
    .max(40,{message: "Name must not be more than 40 char"
    }),

    city: z
    .string({required_error:"City is required"})
    .trim()
    .min(3,{message: "City must be at least of 3 char"})
    .max(40,{message: "City must not be more than 40 char"
    }),
})

module.exports = signupSchema;
