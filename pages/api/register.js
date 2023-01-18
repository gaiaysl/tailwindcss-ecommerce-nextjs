
import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()

export default async function handler(req,res){
    try {
        const user = await User.create(req.body);

        res.redirect('/login')

        if(!user){
            return res.json({code:'kullanıcı oluşturuldu'})
        }
    } catch (error) {
        res.status(400).json({status:'yeni kullanıcı oluşturulmadı.'})
    }
}