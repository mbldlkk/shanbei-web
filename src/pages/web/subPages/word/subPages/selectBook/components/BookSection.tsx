import { STATUS } from "../../../../../../../redux/slice/tag";
import {
  useBookState,
  useUserBookState,
} from "../../../../../../../redux/store";
import { AddUserBookPending } from "./AddUserBookPending";
import { BookCardItem } from "./bookCardItem";

export const BookSection = () => {
  const { book } = useBookState();
  const { status } = useUserBookState();

  return (
    <div className="flex gap-2 gap-x-24">
      {status === STATUS.pending ? (
        <AddUserBookPending />
      ) : (
        book.map((i) => (
          <BookCardItem
            id={i.id}
            title={i.name}
            wordCount={i.wordCount}
            key={i.id}
            bookId={i.id}
          />
        ))
      )}
    </div>
  );
};
