const zod = require("zod");

const signInBody = zod.object({
    vendorCode: zod.string(),
    password: zod.string().min(8)
})

module.exports = signInBody;