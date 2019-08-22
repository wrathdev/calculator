import React from "react";
import { renderToString } from "react-dom/server";
import App from "./component/App";


export default async (req, res) => {
  return res.send({
   
    headers: {
      "X-Powered-By": "stormkit.io",
    },
   
    body: { content: renderToString(<App />) },
    status: 200
  });
};
