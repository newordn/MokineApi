const info = ()=>`Welcome to Mokine's graphql server`
const users = async (parent,args,context,info)=>{
    const users = await context.prisma.users({orderBy: 'id_DESC',where:{
        status:true}})
    return users
}
module.exports={
    info,
    users
}