import { useNoteState } from "../../../../../../../redux/store";

export const MyNotes = () => {
  const {
    myNote: { content },
  } = useNoteState();

  console.log("内容", content);

  if (content !== "") {
    return <>{content}</>;
  }
  return <>你可以记录自己的笔记, 或者收藏他人分享的</>;
};
