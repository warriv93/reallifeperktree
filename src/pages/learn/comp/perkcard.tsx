import React, { Fragment, useState, useEffect } from "react";
import { getArticles } from "../api/resource";

interface Props {
  urlperk: string | string[];
}

export default function PerkCard(props: Props) {
  const [articles, SetArticles] = useState<Array<{ href; text; img; id }>>();

  useEffect(() => {
    // TODO: Change "strength" hard code -> urlperk
    // TODO: implement webscraping for all perks
    getArticles("strength").then((articles) => SetArticles(articles));
  }, []);

  return (
    <Fragment>
      {articles &&
        articles.map((article) => (
          <a href={article.href} key={article.id}>
            <div className="perk-card">
              <div className="left">
                <h3>{article.text}</h3>
                {/* <p>{ele.text}</p> */}
                <button className="btn btn-outline-success">Learn</button>
              </div>
              {article.img && (
                <div className="right">
                  <img src={article.img} alt="image" />
                </div>
              )}
            </div>
          </a>
        ))}
    </Fragment>
  );
}
