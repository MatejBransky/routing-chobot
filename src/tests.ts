import { test } from "uvu";
import * as assert from "uvu/assert";
import { Route, Router, T } from "chobot";

const route = new Route({
  name: "r1",
  path: "/products",
  params: { foo: T.str() },
});
const router = new Router(route);

test("params", () => {
  const url = router.createUrl("r1");
  assert.is(url, "/products");
});

test.run();
