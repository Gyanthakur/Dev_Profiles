// File location: index.js
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const githubToken = core.getInput('github-token');
    const issueMessage = core.getInput('issue-message');
    const prMessage = core.getInput('pr-message');
    const footer = core.getInput('footer') || '';
    const assignUser = core.getInput('assign-user');  // New input for assigning user

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

      // Auto-assign user to issue
      await octokit.issues.addAssignees({
        ...context.repo,
        issue_number: context.payload.issue.number,
        assignees: [assignUser],
      });
    } else if (context.payload.pull_request) {
      // This is a pull request
      const prComment = `${prMessage}\n\n${footer}`;
      await octokit.issues.createComment({
        ...context.repo,
        issue_number: context.payload.pull_request.number,
        body: prComment,
      });

      // Auto-assign user to PR
      await octokit.issues.addAssignees({
        ...context.repo,
        issue_number: context.payload.pull_request.number,
        assignees: [assignUser],
      });
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
