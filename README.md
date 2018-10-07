# Tabler 

Premium and Open Source dashboard template with responsive and high quality UI.

<strong><a href="https://tabler.github.io/demo/">View Demo</a> | <a href="https://github.com/tabler/tabler/archive/master.zip">Download ZIP</a> | <a href="https://goo.gl/zJP2dT">Join us on Slack</a></strong>

<br><br>

![Tabler preview](https://tabler.github.io/assets/images/dashboard.png)

## Documentation

For full documentation, visit [tabler.github.io/tabler/docs](https://tabler.github.io/tabler/docs/index.html).

## Getting Started

### [Download ZIP](https://github.com/tabler/tabler/archive/dev.zip) or Git Clone

```
git clone https://github.com/tabler/tabler.git
```

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
