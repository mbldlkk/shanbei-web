import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { WebPageContainer } from "./pages/web/layout/webPageLayOut";
import { Main } from "./pages/web/subPages/main/main";
import { Code } from "./pages/web/subPages/code/code";
import { Listen } from "./pages/web/subPages/listen/listen";
import { Article } from "./pages/web/subPages/article/article";

import { Account } from "./pages/web/subPages/account/accountPageLayOut";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { WordPageContainer } from "./pages/web/subPages/word/layout/wordPageLayOut";
import { StudyEntry } from "./pages/web/subPages/word/subPages/studyEntry/studyEntry";
import { Study } from "./pages/web/subPages/word/subPages/study/study";
import { WordDetail } from "./pages/web/subPages/word/subPages/wordDetail/wordDetail";
import { Books } from "./pages/web/subPages/word/subPages/books/booksPage";
import { SelectBook } from "./pages/web/subPages/word/subPages/selectBook/selectBook";
import { WordCollection } from "./pages/web/subPages/word/subPages/wordCollection/wordCollection";
import { WordTable } from "./pages/web/subPages/word/subPages/wordTable/wordTable";
import { Expansion } from "./pages/web/subPages/word/subPages/expansion/expansion";
import { WordSetting } from "./pages/web/subPages/word/subPages/setting/setting";

function App() {
  console.log("App组件");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="web" />} />
          <Route path="web" Component={WebPageContainer}>
            <Route index element={<Navigate to="main" replace={false} />} />
            <Route path="main" Component={Main} />
            <Route path="word" Component={WordPageContainer}>
              <Route
                index
                element={<Navigate to="study/entry" replace={true} />}
              />
              <Route path="study/entry" Component={StudyEntry} />
              <Route path="study" Component={Study} />
              <Route path="detail/:wordName" Component={WordDetail} />
              <Route path="books" Component={Books}></Route>
              <Route path="books/select" Component={SelectBook} />

              <Route path="collection" Component={WordCollection} />
              <Route path="table" Component={WordTable} />
              <Route path="applet" Component={Expansion} />
              <Route path="setting" Component={WordSetting} />
            </Route>
            <Route path="code" Component={Code} />
            <Route path="listen" Component={Listen} />
            <Route path="article" Component={Article} />
            <Route path="readBook" Component={Code} />
            <Route path="community" Component={Code} />
            <Route path="help" Component={Code} />
            <Route path="message" Component={Code} />
            <Route path="account/auth/:type" Component={Account} />
          </Route>
          <Route path="*" element={<div>error page</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
