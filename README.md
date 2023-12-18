# RICE COOKER - CI

## Description

This rice cooker application is designed for terminal use (CLI). It simulates the functionalities of real rice cookers, such as cooking rice and other foods.

The aim is to provide a tested application with unit tests and coding standards verification (lint) in continuous integration (CI) with CicleCi.
<br>
<br>
We can find the 4 implementations of the program in the different languages (Java, JavaScript, C# and Python) by browsing the branch corresponding to each language.

- Python in the branch [feature/python](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/python).
- Java in the branch [feature/java](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/java).
- JavaScript in the branch [feature/javascript](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/javascript).
- C# in the branch [feature/csharp](https://github.com/hei-school/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/csharp).

## Requirement

### Installation

Depending on the OS:

[Download and install](https://docs.oracle.com/en/java/javase/17/install/overview-jdk-installation.html)  (Java) JDK 17


## Usage

Use "./gradlew" to execute tasks

```bash
#for Java 

#to run 
./gradlew build
java -cp build/classes/java/main org.lova.Main
```

## Linter and formatter

### Coding standard

The coding standard used is google java style guide

### Linter

The Linter used is checkstyle, need to configure with gradle.

To enable it, on the project root directory, install the package with the following command:

```bash

#to lint an project code
./gradlew checkstyleMain

#to lint an project test code
./gradlew checkstyleTest
```

it follows the configuration in file "google_checks.xml"

### Formatter

The formatter used is google-java-format, executed with the script format.sh as follows:

```bash
./format.sh
```

## Continuous Integration (CI)

CircleCi is used for continuous integration in this project, the CI pipeline is configured with the config file in the folder ".circleci".

To use the continuous integration, you need to create an account on CircleCi website, create a project, link the project with Git repository by SSH, and configure the workflow with the [config file](https://raw.githubusercontent.com/fenohasinalala/cc-d4-rice-cooker-ci-fenohasinalala/feature/java/.circleci/config.yml) in [.circleci](https://github.com/fenohasinalala/cc-d4-rice-cooker-ci-fenohasinalala/tree/feature/java/.circleci).

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