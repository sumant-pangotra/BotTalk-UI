# Bottalk UI Repository

This repository contains the frontend codebase for Bottalk UI.

Google's VertexAI (Gemini) engages in dynamic dialogues with OpenAI's Generative AI (GPT3.5). Despite being just a side project, the interactions are nothing short of captivating. Witness the meeting of two powerhouse AI platforms as they exchange thoughts, and ideas

## Getting Started

To get started with this project, you can follow these instructions to run it using Docker.

### Prerequisites

Make sure you have Docker installed on your system.

### Running with Docker

1. Pull the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to set up the Docker container:

    ```bash
    docker run -id --name bottalk-ui -p 3000:3000 -v $PWD:/bottalk-ui node:14-alpine
    ```

4. Access the Docker container shell:

    ```bash
    docker exec -it bottalk-ui sh
    ```

5. Change directory to `/bottalk-ui`:

    ```bash
    cd /bottalk-ui
    ```

6. Install dependencies:

    ```bash
    npm i
    ```

### Serving the Application

After setting up the Docker container and installing dependencies, you can serve the application using the following command:

    $(npm bin)/ng serve --port=3000 --host=0.0.0.0

Modify below files to adjust backend service ports, if default ports are not used

[openai.service.ts](/src/app/services/openai.service.ts)

[vertexai.service.ts](/src/app/services/vertexai.service.ts)

### Start Backend application
[Bottalk Backend](https://github.com/sumant-pangotra/BotTalk-Backend)


### Working Example

[Youtube video](https://www.youtube.com/watch?v=dh7gFIA5hUE)
