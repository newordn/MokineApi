const info = ()=>`Welcome to Mokine's graphql server`
const users = async (parent,args,context,info)=>{
    const users = await context.prisma.users({orderBy: 'id_DESC',where:{
        status:true}})
    return users
}
// to list of the available herds
const herds = async (parent,args,context,info)=>{
    const herds = await context.prisma.herds({orderBy: 'id_DESC',where:{
        status:true}})
    return herds
}
// to list of the available cows a herd
const cowsByHerd = async (parent,args,context,info)=>{
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
module.exports={
    info,
    users,
    herds,
    cowsByHerd,
    user
}