import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { Card } from "./Card";
import { expect } from "chai";

describe("Card", function () {
  it("should return html", function () {
    const el = <Card title="Welcome!" paragraph="To this example" />;
    var x = ReactDOMServer.renderToStaticMarkup(el);
    expect(x).to.equal(`<aside class="card"><h2>Welcome!</h2><p>To this example</p></aside>`);
  });
});
