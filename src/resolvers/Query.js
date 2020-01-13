const info = ()=>`Welcome to Mokine's graphql server`
const users = async (parent,args,context,info)=>{
    console.log("Users query ")
    const users = await context.prisma.users({orderBy: 'id_DESC',where:{
        status:true}})
        return users
        
    }
   
  
// to list of the available herds
const herds = async (parent,args,context,info)=>{
    console.log("Herds query ")
    const herds = await context.prisma.herds({orderBy: 'id_DESC',where:{
        status:true}})
        
      return herds
  
    
}
// to list of the available cows a herd
const cowsByHerd = async (parent,args,context,info)=>{
    console.log("CowsByHerd query ")
    const cows = await context.prisma.herd({id:args.herdId}).cows({
        orderBy:'id_DESC',where:{
            status:true
        }
    })
    return cows
}
  // to get a particular user with his id
const user = async (parent,args,context,info)=>{
console.log("Getting a user query")
const user = await context.prisma.user({id:args.id})
    return user
}

  // to get users by their profession
  const usersByProfession = async (parent,args,context,info)=>{
    console.log("Getting users by profession")
    const users = await context.prisma.users({orderBy:'id_DESC',where:{
        profession:args.profession
    }})
    return users
  }  
  // list of cows without a herd yet
  const cowsWithoutHerd = async (parent,args,context,info)=>{
    console.log("CowsWithoutHerd query ")
    const cows = await context.prisma.cows({orderBy:'id_DESC',where:{
        herd:null
    }})
    return cows
}  
module.exports={
    info,
    users,
    herds,
    cowsByHerd,
    user,
    usersByProfession,
    cowsWithoutHerd
}