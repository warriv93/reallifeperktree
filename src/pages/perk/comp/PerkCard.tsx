import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

interface Props {
  data?: {
    value: string
    url: string
    icon_url: string
  };
}

export default function PerkCard (props: Props) {
  const [data, SetData] = useState(props.data)

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(response => SetData(response.data))
      .catch(error => console.log(error));
  }, [!data])

  return (
    <Fragment>
      {data && (
        <a href={data.url}>
        <div className="perk-card">
          <div className="left">
          <h3>{"perk.title"}</h3>
          <p>{data.value}</p>
          <button className="btn btn-outline-success">Learn</button>
          </div>
          <div className="right"><img src={data.icon_url} alt="image"/></div>
        </div>
      </a>
      )}
    </Fragment>
  );
}
