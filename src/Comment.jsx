import { useContext } from "react";
import Addcomment from "./Addcomment";
import CommentsContext from "./CommentsContext";
export default function Comment({id,level,commentvalue,username}) {
    const [Comments,setComments] = useContext(CommentsContext) ; 
    function edit(){
        setComments((prev)=>{
                const prevcopy = [...prev] ;
                const idx = prevcopy.findIndex(comm => {
                    return (comm.id === id) ;
                });
                prevcopy.splice(idx,1,{level:level,id:id,pcommentvalue:Comments[idx].commentvalue,username:localStorage.getItem('username')}) ;
                return prevcopy ; 
            }) ;
    }
      function deletecomment(){
    setComments((prev)=>{
                const prevcopy = [...prev] ;
                const idx = prevcopy.findIndex(comm => {
                    return (comm.id === id) ;
                });
                let tdel = 0 ;
                for (let i = idx + 1 ; i < prevcopy.length ;i++){
                    if(Comments[i].level <= level){
                        break ;
                    }
                    else{
                        tdel += 1; 
                    }
                }
                prevcopy.splice(idx,tdel+1) ;
                return prevcopy ; 
            }) ;
  }
  return (
    <div className="comment" style={{width:`${100-(level)*5}%`}}>
      <div className="imgcontainer">

      </div>
      <div className="commentbody">
        <div className="commenter" style={{fontWeight:'900' , fontFamily:'arial' , fontSize:'20px'}}>
          {username}
        </div>
        <div className="commentvalue">
            {commentvalue}
        </div>
        <div className='buttoncont'>
        <Addcomment name='Reply' level={level} pid = {id} />
        {(username==localStorage.getItem('username'))?<button onClick={edit}>Edit</button>:<></>}
        {(username==localStorage.getItem('username'))?<button onClick={deletecomment} > Delete</button>:<></>}
        </div>
      </div>
    </div>
  )
}
