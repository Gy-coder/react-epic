import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import { List, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid #eee;
`;

const Component: React.FC = observer(() => {
  const { HistroyStore } = useStores();
  const loadMore = () => {
    HistroyStore.find();
  };

  useEffect(() => {
    console.log("enter");
    return () => {
      console.log("leave");
      HistroyStore.reset();
    };
  }, []);

  return (
    <div>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={loadMore}
        useWindow={true}
        hasMore={!HistroyStore.isLoading && HistroyStore.hasMore}
      >
        <List
          dataSource={HistroyStore.list}
          renderItem={(item) => {
            return (
              <List.Item key={item.id}>
                <div>
                  <Img src={item.attributes.url.attributes.url} />
                </div>
                <div>
                  <h5>{item.attributes.fileName}</h5>
                </div>
                <div>
                  <a href={item.attributes.url.attributes.url} target="_blank">
                    {item.attributes.url.attributes.url}
                  </a>
                </div>
              </List.Item>
            );
          }}
        >
          {HistroyStore.isLoading && HistroyStore.hasMore && (
            <div>
              <Spin tip="加载中..."></Spin>
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
});

export default Component;
