const bcrypt = require('bcryptjs')
const shortid = require('shortid')
const {APP_SECRET} = require('../../helpers/user')
const {sendMail} = require('../../helpers/mail')
const jwt = require('jsonwebtoken')

// to sign up an user
const signUp = async (parent,args,context,info)=>{
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args,password,status:true})
    const token = jwt.sign({userId:user.id},APP_SECRET)
    return {token,user}
}

// to signin an user
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
// to delete a user
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
// to update a user
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
// to send a verification code
const sendingCode = async (parent,args,context,info)=>{
    
    const generated = shortid.generate()
    const user = await context.prisma.updateUser({data:{
        reset_password_token: generated
    },
    where:{
        id:args.id
    }}
    )
    const code = await sendMail(user.email,`Votre code de réinitialisation est :${generated}`,`Réinitialisation du mot de passe Mokine`)
    
    return generated
    }

    // to reset the password
const resetPassword = async (parent,args,context,info)=>{
    const newPassword = await bcrypt.hash(args.newPassword,10)
    const user = await context.prisma.updateUser({
        data:{
            password: newPassword
        },
        where:{
            id:args.id
        }
    }) 
    return user
    }
module.exports={
    signUp,
    signIn,
    deleteUser,
    updateUser,
    sendingCode,
    resetPassword
}