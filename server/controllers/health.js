const checkHealth=(req,res)=>{
    res.json(
        {
            success:true,
            message:"Server is healthy"
        }
    )
}



export{checkHealth,}