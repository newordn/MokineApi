const herd= (parent,args,context,info)=>{
    return context.prisma.user({id:parent.id}).herd()
}
module.exports={
    herd
}