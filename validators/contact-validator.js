const {z} = require("zod");

const contactSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 char"})
    .max(50,{message:"Name must not be more than 40 char"}),

    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message:"Invalid email-address"})
    .min(10,{message: "email must be at least of 10 char"})
    .max(50,{message: "email must not be more than 40 char"}),
 
    usermsg: z
    .string({required_error:"message is required"})
    .min(5,{message:"Message must be of a 5char"})
    .max(200,{message:"Message must not be more than 200 char"})
})

module.exports = contactSchema;