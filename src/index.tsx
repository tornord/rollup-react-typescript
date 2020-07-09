import React from "react";
import ReactDOMServer from "react-dom/server";
import pretty from "pretty";
import { Card } from "./Card/Card";

const el = <Card title="Welcome!" paragraph="To this example" />;
var html = ReactDOMServer.renderToStaticMarkup(el);
console.log(pretty(html));

// export { Card };
