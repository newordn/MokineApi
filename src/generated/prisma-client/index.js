"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Cow",
    embedded: false
  },
  {
    name: "Herd",
    embedded: false
  },
  {
    name: "Position",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/neword-2bedf8/MokineApi/dev`
});
exports.prisma = new exports.Prisma();
