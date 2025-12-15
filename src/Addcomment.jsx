import { useContext } from 'react';
import CommentsContext from './CommentsContext';
export default function Addcomment({name,level,pid}) {
    const [Comments,setComments] = useContext(CommentsContext);
    const addscomment = function(){
        let canadd = true ;
        Comments.map((comment)=>{
            if(!comment.commentvalue && comment.username == localStorage.getItem('username')){
                alert('You are already commenting somewhere!') ; 
                canadd = false; 
            }
        })
        if(canadd){
            if(level == -1){
                const nid = crypto.randomUUID() ;
                setComments((prev)=>[...prev,{level:level+1, id:nid,username:localStorage.getItem('username')}]) ;
            }
            else{
                setComments((prev)=>{
                    const prevcopy = [...prev] ;
                    const idx = prevcopy.findIndex(comm => {
                        return (comm.id === pid) ;
                    });
                    const nid = crypto.randomUUID() ;
                    prevcopy.splice(idx+1,0,{level:level+1, id:nid,username:localStorage.getItem('username')}) ;
                    return prevcopy ; 
                }) ;
            }
        }
    }
  return (
    <button onClick={addscomment} >{name}</button>
  )
}
