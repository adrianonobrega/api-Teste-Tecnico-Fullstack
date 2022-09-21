import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

export const userOneListService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOne({
        where: {
            id:id
        }
    })

    if(!users){
        throw new Error("User not found")
    }
    
    const result = {
        id:users.id,
        name: users.name,
        email: users.email,
        phone: users.phone,
        created_at: users.created_at,
        updated_at:users.updated_at
    }
        
    return result
}
