import HeaderImport from "./Component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar";
import Footer from "./Component/Footer";
import "./App.css";
import FormPost from "./Component/FormPost";
import ShowPost from "./Component/ShowPost";
import PostList from "./Component/PostList";
import { useState } from "react";
import ContextProvider from "./Store/Context";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <ContextProvider>
      <div>
        <div className="appcont">
          <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
          <div className="main">
            <HeaderImport />
            {selectedTab === "Home" ? (
              <div className="postlist">
                <PostList />
              </div>
            ) : (
              <div className="formc">
                <FormPost />
              </div>
            )}

            <Footer />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
