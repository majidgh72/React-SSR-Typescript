import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouterContext } from "react-router";
import { StaticRouter } from "react-router-dom";
import { cssLinksFromAssets, jsScriptTagsFromAssets } from ".";
import App from "App";

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};

syncLoadAssets();

export const renderApp = (req: express.Request, res: express.Response) => {
  const context: StaticRouterContext = {};

  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    return { redirect: context.url };
  } else {
    return {
      markup,
      cssLinks: cssLinksFromAssets(assets, "client"),
      scriptTags: jsScriptTagsFromAssets(
        assets,
        "client",
        " defer crossorigin"
      ),
    };
  }
};
