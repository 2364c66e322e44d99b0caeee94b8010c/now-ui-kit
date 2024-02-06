# [Now UI Kit](http://demos.creative-tim.com/now-ui-kit/index.html?ref=nuk-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Now%20UI%20Kit%20is%20a%20Free%20Bootstrap%204%20UI%20Kit%20%E2%9D%A4%EF%B8%8F%0Ahttp%3A//demos.creative-tim.com/now-ui-kit/index.html%20%23bootstrap%20%23uikit%20%23design%20%20%23html%20%23free%20via%20%40CreativeTim)

![version](https://img.shields.io/badge/version-1.3.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/now-ui-kit.svg?maxAge=2592000)](https://github.com/creativetimofficial/now-ui-kit/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/now-ui-kit.svg?maxAge=2592000)](https://github.com/creativetimofficial/now-ui-kit/issues?q=is%3Aissue+is%3Aclosed)

![Product Image](https://s3.amazonaws.com/creativetim_bucket/products/56/original/opt_nuk_thumbnail.jpg?1466002372 "Now UI Kit")

# Bootstrap 5 Support

Now UI Kit has been migrated to Bootstrap 5. This makes starting a new project very simple. It also provides benefits if you are already working on a Bootstrap 5 project; you can just import the Now UI Kit style over it. Most of the elements have been redesigned; but if you are using an element we have not touched, it will fall back to the Bootstrap default.

** Bostrap Version**: since tooltip has been changed in version 5.2, a version >= 5.2 of Bootstrap is necessary for usage with tooltip.

**[Now UI Kit](http://demos.creative-tim.com/now-ui-kit/index.html?ref=nuk-readme)** is a responsive Bootstrap 5 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates, and was migrated to be compatible with Bootstrap 5. Build process has also been updated with the latest version of Gulp.

# Build tools

Learn how to use Now UI Kit compiling SCSS, change brand-colors and more.

### Tooling setup

### Change brand colors

- You will find all the branding colors inside `assets/scss/_variables.scss`.

### Compile SCSS (global installation)

1. Download the project’s zip.
2. Make sure you have node.js (https://nodejs.org/en/) installed.
3. Type `npm install` in terminal/console in the source folder where `package.json` is located.
4. Run in terminal `gulp open-app` for opening the Dashboard Page (default) of the product. You can set in gulpfile.js from your downloaded archive any page you want to open in browser, at line 30: `gulp.src('index.html')`.
5. Run in terminal `gulp compileScss` for a single compilation or `gulp watch` for continuous compilation of the changes that you make in `*.scss` files. This command should be run in the same folder where `gulpfile.js` and `package.json` are located.

### Compile SCSS (local installation)

To compile CSS using Gulp without a global installation, follow these steps:

1. Ensure you have a recent version of `npm` (5.2 or higher) which includes `npx`.
2. Open your terminal and navigate to your project directory.
3. Use `npx` to run Gulp tasks. For example, to compile SCSS, execute:

   ```bash
   npx gulp compileScss
   ```

This command uses npx to temporarily install Gulp if it's not already installed and then runs the compile-scss task.

To continuously watch for changes in your SCSS files and compile them, use:
bash

   ```bash
  npx gulp watch
  ```

This will keep the process running and compile CSS whenever you make changes to your SCSS files.

This guide is designed for users with a newer `npm` environment, leveraging `npx` for ease of use with locally installed packages.

# Now UI Kit

Now UI Kit is one of the most popular UI Kits online, provided in PSD and Sketch formats by Invision. We wanted to find a way for developers worldwide to benefit from using it. So, in collaboration with Invision, we are launching the HTML version for it!

Now will help you create a clean and simple website that is a perfect fit for today's flat design. It is built using the 12 column grid system, with components designed to fit together perfectly. It makes use of bold colours, beautiful typography, clear photography and spacious arrangements.

Create awesome, lifelike prototypes with InVision and Now so your users can experience and give feedback on your vision!

To get the PSD and Sketch files, please visit Invision (https://www.invisionapp.com/now).


**Example Pages**
We wanted to fully display the power of this kit, so the kit comes packed with examples showing you how to use the components. Inside the product you will find:


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="60" height="60" />](http://demos.creative-tim.com/now-ui-kit/index.html?ref=nuk-readme)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue.jpg?raw=true" width="60" height="60" />](https://demos.creative-tim.com/vue-now-ui-kit/?ref=nuk-readme)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/angular.jpg?raw=true" width="60" height="60" />](https://demos.creative-tim.com/now-ui-kit-angular/index/?ref=nuk-readme)

| HTML | VUEJS | ANGULAR |
| --- | --- | --- |
| [![Now UI Kit HTML](https://s3.amazonaws.com/creativetim_bucket/products/56/original/opt_nuk_thumbnail.jpg)](http://demos.creative-tim.com/now-ui-kit/index.html?ref=nuk-readme) | [![Now UI Kit Vuejs](https://s3.amazonaws.com/creativetim_bucket/products/94/original/opt_nuk_vue_thumbnail_%281%29.jpg)](https://demos.creative-tim.com/vue-now-ui-kit/?ref=nuk-readme) | [![Now UI Kit Angular](https://s3.amazonaws.com/creativetim_bucket/products/77/original/opt_nuk_angular_thumbnail.jpg)](https://demos.creative-tim.com/now-ui-kit-angular/index/?ref=nuk-readme)

## Demo

| Register | Login | Profile |
| --- | --- | ---  |
| [![Landing](https://github.com/creativetimofficial/public-assets/blob/master/now-ui-kit/nuk-landing-page.png?raw=true)](https://demos.creative-tim.com/now-ui-kit/examples/landing-page.html?ref=adnp-readme)  | [![Login](https://github.com/creativetimofficial/public-assets/blob/master/now-ui-kit/nuk-login-page.png?raw=true)](https://demos.creative-tim.com/now-ui-kit/examples/login-page.html?ref=adnp-readme)  | [![Profile](https://github.com/creativetimofficial/public-assets/blob/master/now-ui-kit/nuk-profile-page.png?raw=true)](https://demos.creative-tim.com/now-ui-kit/examples/profile-page.html?ref=adnp-readme)

## Documentation
The documentation for the Now UI Kit is hosted at our [website](https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html?ref=adn-readme).

## File Structure

```
Now Ui Kit
├── CHANGELOG.md
├── assets
│   ├── css
│   │   ├── bootstrap.min.css
│   │   ├── demo.css
│   │   └── now-ui-kit.css
│   ├── fonts
│   ├── img
│   ├── js
│   │   ├── core
│   │   │   ├── bootstrap.min.js
│   │   │   ├── jquery.3.2.1.min.js
│   │   │   └── popper.min.js
│   │   ├── now-ui-kit.js
│   │   └── plugins
│   │       ├── bootstrap-datetimepicker.js
│   │       ├── bootstrap-switch.js
│   │       └── nouislider.min.js
├── documentation
│   ├── template.html
│   └── tutorial-components.html
├── examples
│   ├── landing-page.html
│   ├── login-page.html
│   └── profile-page.html
├── index.html
└── nucleo-icons.html
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Resources
- Demo: <https://demos.creative-tim.com/now-ui-kit/index.html?ref=adnp-readme>
- Download Page: <https://www.creative-tim.com/product/now-ui-kit?ref=adnp-readme>
- Buy PRO: https://www.creative-tim.com/product/now-ui-kit-pro
- Documentation: <https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html?ref=adnp-readme>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/now-ui-kit)
- **Dashboards:**

| HTML | VUEJS | ANGULAR |
| --- | --- | --- |
| [![Now UI Kit HTML](https://s3.amazonaws.com/creativetim_bucket/products/56/original/opt_nuk_thumbnail.jpg)](http://demos.creative-tim.com/now-ui-kit/index.html?ref=nuk-readme) | [![Now UI Kit Vuejs](https://s3.amazonaws.com/creativetim_bucket/products/94/original/opt_nuk_vue_thumbnail_%281%29.jpg)](https://demos.creative-tim.com/vue-now-ui-kit/?ref=nuk-readme) | [![Now UI Kit Angular](https://s3.amazonaws.com/creativetim_bucket/products/77/original/opt_nuk_angular_thumbnail.jpg)](https://demos.creative-tim.com/now-ui-kit-angular/index/?ref=nuk-readme)

## Change log

Please see the [changelog](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Creative Tim](https://creative-tim.com/)
- [InvisionApp](https://www.invisionapp.com/)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Now UI Kit. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Argon Dashboard Pro Nodejs. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/?ref=nuk-readme)
- [Creative Tim License](https://www.creative-tim.com/license).


## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=adn-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=adn-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=adn-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=adn-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=adn-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles??ref=adn-readme)

### Social Media

Twitter: <https://twitter.com/CreativeTim?ref=adnp-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=adnp-readme>

Dribbble: <https://dribbble.com/creativetim?ref=adnp-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=adnp-readme>
