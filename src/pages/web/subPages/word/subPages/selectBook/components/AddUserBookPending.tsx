import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AddUserBookPending = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeId = setTimeout(() => navigate("/web/word/books"), 3000);
    return clearTimeout(timeId);
  }, []);

  return <div>书籍添加中... 请稍等片刻</div>;
};
