const bcrypt = require('bcryptjs')
const {APP_SECRET} = require('../../helpers/user')
const jwt = require('jsonwebtoken')
const signUp = async (parent,args,context,info)=>{
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args,password})
    const token = jwt.sign({userId:user.id},APP_SECRET)
    return {token,user}
}
async function signIn(parent,args,context,info)
{
    const user =  await context.prisma.user({phone:args.phone})
    if(!user){
        throw new Error("L'utilisateur n'existe pas. Inscrivez-vous")
    }
    const valid = await bcrypt.compare(args.password,user.password)
    if(!valid){
        throw new Error('Mot de passe incorrect')
    }
    const token = jwt.sign({userId: user.id},APP_SECRET)
    return {
        token,
        user
    }
}

module.exports={
    signUp,
    signIn
}