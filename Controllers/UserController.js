import User from '../Models/UserSchema.js'

// create a new user
export const createUser  = async(req,res)=>{
    try{
        const {name,email,age} = req.body;
        const newUser = new User({name,email,age});
        await newUser.save();
        res.status(200).json({Message:"User Registered Successfully",data:newUser})
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Create User"});
    }
}
//get all users
export const getUsers = async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({Message:"Users Fetched Successfully",data:users});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Get Users"});
    }
}
//Update user
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
      const result = await User.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
      });
      if(result.matchedCount == 0){
        res.status(404).send("Id not Found");
    }
      const updatedUser = await User.findById(id);
      res.status(200).json({ message: "User Updated Successfully", result: updatedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server Error in Update User" });
    }
}
//Delete User

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
      const deletedUser = await User.findByIdAndDelete({_id:id});
      res.status(200).json({ message: "User Deleted Successfully"});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server Error in Delete User" });
    }
}

