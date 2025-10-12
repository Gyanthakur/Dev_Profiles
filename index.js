// File location: index.js
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const githubToken = core.getInput('github-token');
    const issueMessage = core.getInput('issue-message');
    const prMessage = core.getInput('pr-message');
    const footer = core.getInput('footer') || '';

    const octokit = github.getOctokit(githubToken);
    const context = github.context;

    if (context.payload.issue) {
      // This is an issue
      const issueComment = `${issueMessage}\n\n${footer}`;
      await octokit.issues.createComment({
        ...context.repo,
        issue_number: context.payload.issue.number,
        body: issueComment,
      });
    } else if (context.payload.pull_request) {
      // This is a pull request
      const prComment = `${prMessage}\n\n${footer}`;
      await octokit.issues.createComment({
        ...context.repo,
        issue_number: context.payload.pull_request.number,
        body: prComment,
      });
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();