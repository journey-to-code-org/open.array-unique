import test from "node:test";
import assert from "node:assert/strict";
import { uniqueArray } from "../src/index.js";
test("deduplicates primitives",()=>assert.deepEqual(uniqueArray([1,1,2,2]),[1,2]));
test("deduplicates by property",()=>assert.deepEqual(uniqueArray([{id:1,x:"a"},{id:1,x:"b"},{id:2}], "id").map(x=>x.id),[1,2]));
test("deduplicates by selector",()=>assert.equal(uniqueArray(["A","a"],x=>x.toLowerCase()).length,1));
