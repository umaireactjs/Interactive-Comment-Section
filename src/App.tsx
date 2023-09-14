import { useState } from "react";
import { Comment, CommentProps } from "./components/comment";
import { MessageBox } from "./components/message_box";

function App() {
  const [data, setData] = useState<CommentProps[]>([
    {
      username: "Maria",
      comment:
        "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
      imgURL: "/images/user1.png",
    },
    {
      username: "Alex Benjamin",
      comment:
        "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
      imgURL: "/images/user2.png",
    },
    {
      username: "Tania",
      comment:
        "Hey bud, welcome back to home. It's so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
      imgURL: "/images/user3.png",
    },
  ]);

  function deleteComment(index: number): void {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  }

  function submitComment(): void {
    setData([
      ...data,
      {
        username: "John Doe",
        comment: "Thank you all!",
        imgURL: "/images/user4.png",
        creator: true,
      },
    ]);
  }

  return (
    <div className="grid place-content-center justify-items-center">
      <h1 className="font-bold text-xl p-2 justify-self-center w-3/4 sm:w-1/2">
        Comments
      </h1>
      <div className="space-y-4 w-3/4 sm:w-1/2">
        {data.map((data, index) => (
          <Comment
            key={index}
            comment={data.comment}
            imgURL={data.imgURL}
            username={data.username}
            creator={data.creator}
            onDelete={() => deleteComment(index)}
          />
        ))}
      </div>
        <div className="w-1/2">
      <MessageBox submitComment={submitComment}/>
    </div></div>
  );
}

export default App;
