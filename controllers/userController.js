const User = require('../models/user');


const getAllUsers  = async (req, res) => {
    try{
        const users = await User.findAll();
        res.json(users);
    } catch(error){
        res.status(500).json({error: error.message})
    }
}


const getUserById = (req,res)=>{
    const userId = req.params.id;
    try{
        const user = User.findByPk(userId);
        if(user){
            res.json(user);
        } else {
            return res.status(404).json({user});
        }
        
    } catch(error){
        res.status(500).json({error: error.message})
    }
}
const createUser = async (req,res) => {
    const {nom, prenom, email, password, telephone, adresse, ville} = req.body;
    
    try{
        console.log(req.body);
        const newUser = await User.create({nom, prenom, email, password, telephone, adresse, ville});
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({error: error.message});
    }

}
//if(!a) if(a == true)

const updateUserById = async (req,res) => {
    const userId = req.params.id;
    const {nom, prenom, email, password, adresse, telephone, ville} = req.body;
    console.log(req.body);
    try{
        const user = await User.findByPk(userId);
        if(user){
            await user.update({nom, prenom, email, password, adresse, telephone, ville})
            res.json(user);
        } else {
            res.status(404).json({error: `user with id:${userId}, not found`});
        }
    } catch(error){
        res.status(500).json({error: error.message});
    }
}

const deleteUserById = async (req, res) =>{
    const userId = req.params.id;
    try{
        const user = await User.findByPk(userId);
        if(user){
            await user.destroy()
            res.json({message: "User deleted"})
        } else {
            res.status(404).json({error: error.message})
        }
    } catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}