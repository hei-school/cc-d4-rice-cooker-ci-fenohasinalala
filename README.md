# RICE COOKER - CI

## Description

This rice cooker application is designed for terminal use (CLI). It simulates the functionalities of real rice cookers, such as cooking rice and other foods.

The aim is to provide a tested application with unit tests and coding standards verification (lint) in continuous integration (CI) with CicleCi.
<br>
<br>
We can find the 4 implementations of the program in the different languages (Java, JavaScript, C#, and Python) by browsing the branch corresponding to each language.

- Python in the branch [feature/python](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/python).
- Java in the branch [feature/java](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/java).
- JavaScript in the branch [feature/javascript](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/javascript).
- C# in the branch [feature/csharp](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/csharp).

## Requirement

### Installation

Depending on the OS:

[Download and install](https://www.python.org/downloads/) Python 3.10 or higher

## Usage

```bash
#install dependencies
pip install -r requirements.txt

# To run the application
python Main.py
```

## Linter and formatter

### Coding standard

The coding standard used is PEP8

### Linter

The Linter used is Ruff

Launch with the following command:

```bash
ruff check .
```

The configuration is done with the file "pyproject.toml"

### Formatter

ruff is also a formatter:

```bash
ruff check . --fix
```

## Continuous Integration (CI)

CircleCi is used for continuous integration in this project, the CI pipeline is configured with the config file in the folder ".circleci".

To use the continuous integration, you need to create an account on CircleCi website, create a project, link the project with Git repository by SSH, and configure the workflow with the [config file](https://raw.githubusercontent.com/fenohasinalala/cc-d4-rice-cooker-ci-fenohasinalala/feature/python/.circleci/config.yml) in [.circleci](https://github.com/fenohasinalala/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/python/.circleci).

## Features

### Implemented features

- Cook rice (main functionality)
- Check the status of the rice cooker
- Track the time of cooking
- Shut down the rice cooker

### future features

- Cook food by selecting recipes (advanced functionality)
- Steam food

## License

This project is licensed under the [MIT License](LICENSE.md).

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/__xb4cFP)