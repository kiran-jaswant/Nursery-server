import Plant from "../models/Plant.js";


const postPlant= async (req,res)=>{
    const{name,category,image,price,description}=req.body;

    const newPlant= new Plant({
        name:name,
        category:category,
        image:image,
        price:price,
        description:description
    })

    const savedPlant= await newPlant.save();

    res.json({
        success:true,
        data:savedPlant,
        message:"Plant created successfully"

    })

}


const getAllPlants=async (req,res)=>{
    const allPlants= await Plant.find()
    res.json({
        success:true,
        data:allPlants,
        message:"All plants are fetched successfully"

    })
}

const getPlantId=async (req,res)=>{
    const{id}=req.params;

    const plant= await Plant.findOne({_id:id})

    res.json({
        success:true,
        data:plant,
        message:"Plant fetched Successfully"
    })
}

const putPlant=async(req,res)=>{
    const{id}=req.params;
    const{name,category,image,price,description}=req.body;

    const updateplant= await Plant.updateOne({_id:id},{
        $set:{
            name:name,
            category:category,
            image:image,
            price:price,
            description:description
        }
    })

    const updatedPlant= await Plant.findById(id)

    res.json({
        success:true,
        data:updatedPlant,
        message:"Plant updated successfully"
    })

}

const deletePlant=async(req,res)=>{

    const{id}=req.params;

    await Plant.deleteOne({_id:id});

    res.json({
        success:true,
        data:null,
        message:"Plant is deleted Successfully"

    })

}
export{getAllPlants,postPlant,getPlantId,putPlant,deletePlant}