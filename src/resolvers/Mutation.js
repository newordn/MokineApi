const bcrypt = require('bcryptjs')
const {APP_SECRET} = require('../../helpers/user')
const jwt = require('jsonwebtoken')
const signUp = async (parent,args,context,info)=>{
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args})
    const token = jwt.sign({userId:user.id},APP_SECRET)
    return {token,user}
}

module.exports={
    signUp
}