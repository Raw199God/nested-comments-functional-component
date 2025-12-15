import { createContext } from "react";
function contexterror(){
    console.log('Context not working!');
}
const CommentsContext = createContext([[],contexterror]) ; 
export default CommentsContext ;