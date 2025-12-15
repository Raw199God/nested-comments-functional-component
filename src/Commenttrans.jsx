import { useContext } from "react";
import CommentsContext from "./CommentsContext";
export default function Commenttrans({ level, id , username}) {
    const [Comments,setComments] = useContext(CommentsContext) ; 
    function postcomment(data) {
        const commentvalue  =  (data.get("commentvalue"));
        setComments((prev)=>{
            const prevcopy = [...prev] ;
            const idx = prevcopy.findIndex(comm => {
                return (comm.id === id) ;
            });
            prevcopy.splice(idx,1,{level:level,id:id,commentvalue:commentvalue,username:localStorage.getItem('username') }) ;
            return prevcopy ; 
        }) ;
    }
    function cancel(){
    setComments((prev)=>{
                const prevcopy = [...prev] ;
                const idx = prevcopy.findIndex(comm => {
                    return (comm.id === id) ;
                });
                if(Comments[idx].pcommentvalue){
                    prevcopy.splice(idx,1,{level:level,id:id,commentvalue:Comments[idx].pcommentvalue,username:localStorage.getItem('username') }) ;
                }
                else{
                    prevcopy.splice(idx,1) ;
                }
                return prevcopy ; 
            }) ;
  }
  return (
    <div className="comment" style={{ width: `${100 - level * 5}%` }}>
      <div className="imgcontainer"></div>
      <div className="commentbody">
        <div
          className="commenter"
          style={{ fontWeight: "900", fontFamily: "arial", fontSize: "20px" }}
        >
          {username}
        </div>
        <form action={postcomment} className=".formcomment">
            <input name='commentvalue' type="text" className="entercomment" autoFocus={true} ></input>
            <div className="buttoncont">
            <button type="button" onClick={cancel}>Cancel</button>
            <button type="submit">Post</button>
            </div>
        </form>
      </div>
    </div>
  );
}
