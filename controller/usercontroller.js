
import bcrypt from "bcrypt"
import User from "../model/usermodel.js";
import generateToken from "../util/generatetoken.js";


//USER REGISTRATION
export const userRegisterController = async (req, res) => {
    const {fullname, email, password} = req.body;
    try {
        const userFound = await User.findOne({email});
        if(userFound){
            return res.json({message: "User Already Exist"})
        }else{
            //HASH PASSWORD
            const salt = await bcrypt.genSalt(10);
            const passwordhas = await bcrypt.hash(password,salt)
            const user = await User.create({
                fullname,
                email,
                password:passwordhas
            })
            res.json({
                Status: "Success",message:"Account Created Successfully",
                data: user
            })

        }
    } catch (error) {
        res.json(error.message)   
    }
}
//USER LOGIN
export const userLoginController = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body
    try {
        const foundUser = await User.findOne({email});
        // console.log(foundUser);
        if(!foundUser){
            return res.json({
                status: "error",message:"Wrong Login Details"
            })
            // res.status(404).send('Not found');
        }
        const foundPassword = await bcrypt.compare(password,foundUser.password)
        if(!foundPassword){
            return res.json({
                status: "error",message:"Wrong Login Details"
            })
        }
        else{
            
            res.json({
                status: "Success",message:"Login Successfully",
                data:{
                    fullname:foundUser.fullname,
                    email:foundUser.email,
                    token:generateToken(foundUser._id)
                }
            });
        }
    } catch (error) {
        res.json(error.message)
    }
}

