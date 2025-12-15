import React, { useEffect, useState } from "react";
import Addcomment from "./Addcomment";
import CommentsContext from "./CommentsContext.jsx";
import ResetCommentSection from "./ResetCommentSection.jsx";
import Commenttrans from "./Commenttrans.jsx";
import Comment from "./Comment.jsx";
export default function CommentSection({ level }) {
  const [Comments, setComments] = useState(
    JSON.parse(localStorage.getItem("Comments")) || []
  );
  localStorage.setItem("Comments", JSON.stringify(Comments));
  return (
    <CommentsContext value={[Comments, setComments]}>
      <div className="commentsection">
        <div className="buttoncont">
          <Addcomment name="Add Comment" level={level} />
          <ResetCommentSection />
        </div>
        {Comments.map(({ id, level, commentvalue, username }) => {
          if (commentvalue) {
            return (
              <Comment
                level={level}
                id={id}
                key={id}
                commentvalue={commentvalue}
                username={username}
              />
            );
          } else {
            if (username == localStorage.getItem("username")) {
              return (
                <Commenttrans
                  level={level}
                  id={id}
                  key={id}
                  username={username}
                />
              );
            }
          }
        })}
      </div>
    </CommentsContext>
  );
}
