const catterys= (parent,args,context,info)=>{
    return context.prisma.herd({id:parent.id}).catterys()
}

module.exports={
    catterys
}