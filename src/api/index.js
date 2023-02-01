const { Octokit } = require("@octokit/core");

const api = new Octokit({
  auth: "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",
  acceptstring: "application/vnd.github.v3+json",
});

module.exports = api;
