# ctm-multi-stage-wizard

## Setup

Make sure yarn is installed in your development environment.
```
npm install -g yarn
```
Set up dependencies for the project.
```
yarn install
```

## Packages

In addition to a common package containing shared code, each frontend type is stored in a separate package in the ```packages``` folder.

| Name                           | Folder | Description                                    |
| ----------------------------   | ------ | ---------------------------------------------- |
| @ctm-multi-stage-wizard/common | common | Common code shared between other packages      |
| @ctm-multi-stage-wizard/wizard | wizard | A multi-stage form wizard processing component |


## Running

The timelines can be run locally using the following commands and will start a web server on localhost.

| Module   | Command              | Address        |
| -------- | -------------------- | -------------- |
| wizard   | yarn wizard:start    | localhost:3030 |

## Testing

Jest is used for testing. All unit tests can be run by executing ```yarn test```, or execute ```yarn test:watch``` to start Jest in watch mode and rerun tests on file changes.
