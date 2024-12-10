import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// register API
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

//login API
export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

//add-project API
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}

//home API
export const homeProjectsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})   
}

//user project API
export const userProjectsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)   
}

//all project API
export const allProjectsAPI = async(reqHeader,searchKey)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)   
}