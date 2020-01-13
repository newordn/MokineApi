const catterys= async (parent,args,context,info)=>{
    console.log("Catterys resolvers ")
    const catterys = await context.prisma.herd({id:parent.id}).catterys()
    return catterys
}
const cows= async (parent,args,context,info)=>{
    console.log("Cows resolvers ")
    const cows= context.prisma.herd({id:parent.id}).cows()
    return cows
}
module.exports={
    catterys,
    cows
}