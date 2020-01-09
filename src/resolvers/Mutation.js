const bcrypt = require('bcryptjs')
const {APP_SECRET} = require('../../helpers/user')
const jwt = require('jsonwebtoken')
const signUp = async (parent,args,context,info)=>{
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args,password,status:true})
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
const deleteUser = async (parent,args,context,info)=>{
const deleted = await context.prisma.updateUser({
    data:{
        status:false
    },
    where:{
        id:args.id
    }
})
return deleted
}

const updateUser = async (parent,args,context,info)=>{
    const data = {}
    data[`${args.field}`] = args.value
    const updated = await context.prisma.updateUser({
        data:data,  
        where:{
            id:args.id
        }
    })
    return updated
    }
module.exports={
    signUp,
    signIn,
    deleteUser,
    updateUser
}