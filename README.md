### Setup environment

To use our build system and run documentation locally, you will need a copy of Tabler's source files and Node. Follow the steps below:

1. [Download and install Node.js](https://nodejs.org/download/), which is used to manage our dependencies.
2. Navigate to the root `/tabler` directory and run `npm install` to install local dependencies listed in `package.json`.
3. [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/), install [Bundler](https://bundler.io/) with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
   
   **Windows users:** Read [this guide](https://jekyllrb.com/docs/windows/) to get Jekyll up and running without problems.
  
When completed, you will be able to run the various commands provided in the command line.

### Build

1. From the root `/tabler` directory, run `npm run serve` in the command line.
2. Open [http://localhost:4000](http://localhost:4000) in your browser, and voilà.
3. Any change in `/src` directory will build application and refresh the page.

**Warning!** all changes made in `_site/` folder would be overwritten on application build.
