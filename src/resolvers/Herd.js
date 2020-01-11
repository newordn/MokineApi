const catterys= (parent,args,context,info)=>{
    return context.prisma.herd({id:parent.id}).catterys()
}
const cows= (parent,args,context,info)=>{
    return context.prisma.herd({id:parent.id}).cows()
}
module.exports={
    catterys,
    cows
}