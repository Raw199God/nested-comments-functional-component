import { useContext } from "react";
import CommentsContext from "./CommentsContext";

export default function ResetCommentSection() {
    const [_,setComments] = useContext(CommentsContext) ; 
    function resetscommentsection(){
        localStorage.setItem('Comments','[]') ;
        setComments([]);
    }
  return (
    <button onClick={resetscommentsection}>Reset Comment Section</button>
  )
}
