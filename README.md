# NoteApp Backend

This repository contains the backend for a simple note-taking application built with Node.js and Express. It demonstrates modern development and DevOps practices, including automated testing, static code analysis, containerization, and CI/CD.

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Development with Hot-Reload](#development-with-hot-reload)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Static Code Analysis](#static-code-analysis)
- [CI/CD and Automation](#cicd-and-automation)
- [Containerization](#containerization)
- [Automatic Dependency Updates](#automatic-dependency-updates)
- [Quality Assurance](#quality-assurance)

---

## Features

- REST API for notes (CRUD)
- Unit and integration tests with Mocha, Chai, and Supertest
- Static code analysis with ESLint
- Automated builds, linting, and tests via GitHub Actions
- Automatic Docker build and push to GitHub Container Registry
- Automatic dependency updates via Dependabot
- Quality gates for pull requests

---

## Requirements

- [Node.js](https://nodejs.org/) (recommended: v20)
- [npm](https://www.npmjs.com/)
- Optional: [Docker](https://www.docker.com/) (for containerization)

---

## Installation

```bash
npm install
```

---

## Running the Application

```bash
npm start
```
The app will run on [http://localhost:3001](http://localhost:3001) by default.

---

## Development with Hot-Reload

```bash
npm run dev
```
Uses [nodemon](https://nodemon.io/) for automatic restarts on code changes.

---

## API Endpoints

- `GET /`  
  Returns a welcome message.

- `GET /api/notes`  
  Returns all notes as JSON.

- `POST /api/notes`  
  Creates a new note.  
  **Body:** `{ "content": "Text", "important": true|false }`

---

## Testing

Unit and integration tests are located in the `test/` folder.

Run all tests locally:
```bash
npm test
```

---

## Static Code Analysis

This project uses [ESLint](https://eslint.org/) for static code analysis.

Run the linter locally:
```bash
npm run lint
```

---

## CI/CD and Automation

- **GitHub Actions**: Automated build, linting, tests, and Docker build on every push and pull request to the main branch.
- **Quality Gate**: PRs can only be merged if linting and tests pass.

---

## Containerization

A Dockerfile is included.  
Build and run the image locally:
```bash
docker build -t noteapp .
docker run -p 3001:3001 noteapp
```
Images are automatically pushed to the GitHub Container Registry on every push to `main`.

---

## Automatic Dependency Updates

[Dependabot](https://docs.github.com/en/code-security/dependabot) regularly checks for new versions of dependencies and creates automatic pull requests.

---

## Quality Assurance

- **Static Code Analysis:** ESLint and CodeQL
- **Automated Testing:** Mocha, Chai, Supertest
- **CI/CD:** All checks run on every PR and push to main

---