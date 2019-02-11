# cap 
### continuous accessibility pal - accessible web technology products

Project revolving around integration of [Pa11y](https://github.com/pa11y/pa11y) accessibility tool with Jenkins pipeline.

## About:

This tool connects P11y accessibility tool with Jenkins pipeline via Jenkinsfile.

Pally is a tool where you choose website URL for accessibility test, WCAG 2.0 (Web Content Accessibility Guidelines 2.0; although latest version is 2.1) standard type:
* ("A" or "Must have"; "AA" or "Would be nice to have"; and "AAA" is like "A+" in school) :fire:

After that Pa11y for you compares every element of your webpage with item within chosen standard and makes report out of it.

To make this process easier, this repo offers integration of CI (Continuous integration) tool Jenkins and our accessibility pal Pa11y.

[Jenkinsfile](https://github.com/degordian/continuous-accessibility-pal/blob/master/Jenkinsfile), explanation is in:
> "Jenkins Pipeline provides an extensible set of tools for modeling simple-to-complex delivery pipelines "as code". The definition of a Jenkins Pipeline is typically written into a text file (called a Jenkinsfile) which in turn is checked into a project’s source control repository." (insert from [Jenkins.io/doc](https://jenkins.io/doc/pipeline/tour/hello-world/))

[package.json](https://github.com/degordian/continuous-accessibility-pal/blob/master/package.json) defines dependencies, environment variables and test call functionality.

And inside [pa11y_config.js](https://github.com/degordian/continuous-accessibility-pal/blob/master/pa11y_config.js) is set of configuration instructions for Pa11y operation calls.

# Hint:

I use Jenkins to create GUI / UI interface for easier forwarding of variables defined inside package.json and pa11y_config.js files with these variables:
* WEBSITE_UNDER_TEST

Example is https://en.wikipedia.org/wiki/Sirocco_(parrot).
* STANDARD

Choose from WCAG2A / WCAG2AA / WCAG2AAA.
* COOKIE

Authentication cookie for website under test
*optional field
* AUTHORIZATION

Auth string value (e.g. in case of Basic auth)
*aslo optional field

## Let's make web accessibile! :cyclone:

![](cap.png)
