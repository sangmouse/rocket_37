import React from "react";
import { Data } from "../App";

interface Lifecycle2Props {
  data: Data | undefined;
}

export default function Lifecycle2(props: Lifecycle2Props) {
  console.log("lifecycle2 init");

  const { data } = props;

  function renderList(){
    return data?.data.map(function (item, index) {
          return (
            <li>
              <p>{item.avatar}</p>
              <p>{item.email}</p>
              <p>{`${item.first_name} ${item.last_name}`}</p>
            </li>
          );
        })
  }

  return (
    <>
      <h1>Lifecycle2 Component Heading</h1>
      <ul>
        {renderList()}
      </ul>
    </>
  );
}
