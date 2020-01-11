const bcrypt = require('bcryptjs')
const shortid = require('shortid')
const {APP_SECRET} = require('../helpers/user')
const {sendMail} = require('../helpers/mail')
const jwt = require('jsonwebtoken')

// to sign up an user
const signUp = async (parent,args,context,info)=>{
    console.log("SignUp mutation")
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args,password,status:true})
    const token = jwt.sign({userId:user.id},APP_SECRET)
    return {token,user}
}

// to signin an user
async function signIn(parent,args,context,info)
{
    console.log("SignIn mutation")
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
    console.log("deleteUser mutation")
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
    console.log("UpdateUser mutation")
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
    console.log("SendingCode mutation")
    const generated = shortid.generate()
    const user = await context.prisma.updateUser({data:{
        reset_password_token: generated
    },
    where:{
        email:args.id
    }}
    )
    const code = await sendMail(user.email,`Votre code de réinitialisation est :${generated}`,`Réinitialisation du mot de passe Mokine`)
    
    return generated
    }

    // to reset the password
const resetPassword = async (parent,args,context,info)=>{
    console.log("resetPassword mutation")
    const newPassword = await bcrypt.hash(args.newPassword,10)
    const user = await context.prisma.updateUser({
        data:{
            password: newPassword
        },
        where:{
            email:args.email
        }
    }) 
    return user
    }

       // to create a cow
const cow = async (parent,args,context,info)=>{
    console.log("Create a cow mutation")
    let images = await Promise.allSettled(args.images.map(async v=>await context.storeUpload(v)))
    console.log(images)
    images = images.map(v=>v.path)
    
    const cow  = context.prisma.createCow({...args,status:true,images:{set:images},herd:{connect:{id:args.herd}},myId:Math.random.toString()})
    return cow
    }
           // to create a herd
const herd = async (parent,args,context,info)=>{
    console.log("Create a herd mutation")
    const image = await  context.storeUpload(args.image)
    const cows = args.cows.map( v=>({id: v}))
    const catterys = args.catterys.map( v=>({id: v}))
    const herd  = await context.prisma.createHerd({...args,status:true,image:image.path,cows:{
        connect:cows
    },
    catterys:{
        connect:catterys
    }    
})
    return herd
    }
     
module.exports={
    signUp,
    signIn,
    deleteUser,
    updateUser,
    sendingCode,
    resetPassword,
    cow,
    herd
}