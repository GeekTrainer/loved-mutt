# Goal 0: Run the application locally

Whenever working on any project, step 0 is typically to fork and clone the repository, install the necessary tooling, and run the application locally. To streamline this process, The Loved Mutt have provided your team with step-by-step instructions.

## About the application

The front-end was created using [Svelte](https://svelte.dev) and [SvelteKit](https://kit.svelte.dev). No experience with Svelte is required; the only front-end code your team will need to write will be JavaScript, and a comment has been placed where the code should go.

The back-end uses [Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-overview), the Azure serverless platform. Azure Functions are supported natively by Azure Static Web Apps, which is where your team will deploy the application. As your team gets to each goal, relevant notes about the application will be provided.

> Note: Your team does not have to run the application locally to complete this workshop. If you wish to configure your system for local development, [setup steps have been provided](./4-optional-run-locally).

## Generate the repository and obtain the source code

The starter repository (or repo) has been created as a [GitHub template](https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template). One member of your team will generate a repository from this template, while the remaining team members will fork it. All team members will clone the repository locally.

1. One team member: [generate the repository](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fgeektrainer%2Floved-mutt%2Fgenerate). You can give the repository whatever name you like.
1. All other team members will [fork](https://docs.github.com/github/getting-started-with-github/quickstart/fork-a-repo) the new repository.
1. All team members will [clone the repository](https://docs.github.com/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository), which can be accomplished by running the following command.
1. For all team members, after cloning the repository, open the local folder in Visual Studio Code

## Congratulations

Your team has successfully obtained the starter code! Now it's time to [deploy the project to the cloud](1-deploy.md).
