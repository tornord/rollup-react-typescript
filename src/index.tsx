import React from "react";
import ReactDOMServer from "react-dom/server";
import pretty from "pretty";
import { Card } from "./Card/Card";
import { BarChart } from "./BarChart";

const el1 = <Card title="Welcome!" paragraph="To this example" />;
var html1 = ReactDOMServer.renderToStaticMarkup(el1);
console.log(pretty(html1));

const el2 = <BarChart values={[21, 35, 30, 12, 7]} />;
var html2 = ReactDOMServer.renderToStaticMarkup(el2);
console.log(pretty(html2));

// export { Card, BarChart };
