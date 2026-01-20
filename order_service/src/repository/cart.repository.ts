import { CartRepositoryType } from "../types/repository.type";

const createCart = async (input: any) => {
    //connect to Db
    //Perform DB operations
    return Promise.resolve({message: "Fake response", input});
}

const updateCart = async (input:any) => {
    return Promise.resolve({});
}

const findCart = async (input:any) => {
    return Promise.resolve({});
}

const deleteCart = async (input:any) => {
    return Promise.resolve({});
}

export const CartRepository : CartRepositoryType = {
    create: createCart,
    find: findCart,
    update: updateCart,
    delete: deleteCart
    
}