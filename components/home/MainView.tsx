import React from "react";

import TabList from "./TabList";
import ArticleList from "../article/ArticleList";
import Axios from "axios";
import Link from "next/link";

function Pill() {

}

function MainView() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    Axios({
      method: 'GET',
      url: 'http://localhost:3000/api/tags'
    }).then(res => {
      setData(res.data.data)
    }).catch(err => {
      console.log(err.response.status)
    })
  }, [])
  return (
    <div className="col-md-12">
      <div className="feed-toggle">
        <TabList />
      </div>
      <div className="row">
        <div className="col-md-9">
          <ArticleList />
        </div>
        <div className="col-md-3">
          <div style={{ backgroundColor: '#ddd', padding: 10 }}>
            <h5>Popular Tags</h5>
            {data.length > 0 ? data.map((i, index) => <Link href={i.url}>
              <div className="pills">{i.name}</div>
            </Link>) : <div></div>}
          </div>
        </div>
      </div>


    </div>
  );
}

export default MainView;
