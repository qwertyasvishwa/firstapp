# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
You can also Run `ng serve --open` to run the default browser and will run the application on appropriate port.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## All About Angular Project Structure Now
src Folder : You will find all the files related to project will be find here.

## Componenets
Yes now you can make the componenets just using the commands `ng g c abc`. 
It is the abbreviation of the commands of the `ng genrate component abc`

To make the components nester under one components, you can simply use `ng g c abc/xyz`

You can see all the components under the `app` folder in the `src`.

And yes, if you dont want to add any of the folders for the component, you can simply use the `ng g c components --flat`
This command will create a component with the name of the components without a folder.

Use `dry run` options to see the list of files and folders that will be generated without creating any files and folders.
For example : `ng g c ghi -d`

`-d` is an alias for the `dry run options`

## Service
To create the service is very similar to the creating the components.
Use the commands `ng g s customer` for the service.

But remember your service won't register automtically. 
There are two ways to register it now : 
1) Manual
2) Or by instructing the Angular CLI to register it with specific module.