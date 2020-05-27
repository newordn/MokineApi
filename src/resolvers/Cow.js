const positions= async (parent,args,context,info)=>{
    const positions = await context.prisma.cow({id:parent.id}).positions({orderBy:'id_DESC'})
    return positions
}
module.exports={
   positions
}