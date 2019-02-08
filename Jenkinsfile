pipeline {
    agent any
    parameters {
        string defaultValue: 'https://www.bornfight.com', description: 'The URL of the page you want to test.', name: 'WEBSITE_UNDER_TEST', trim: false
        string defaultValue: '', description: '''Authentication cookie for website under test
         *optional field''', name: 'COOKIE', trim: false
        string defaultValue: '', description: '''Auth string value (e.g. in case of Basic auth)
         *optional field''', name: 'AUTHORIZATION', trim: false
        choice choices: ['WCAG2A', 'WCAG2AA', 'WCAG2AAA'], description: 'The accessibility standard to use when testing pages.', name: 'STANDARD'
    }
    stages {
        stage("Build") {
            steps {
                sh "npm install"
            }
        }
        stage("Test") {
            steps {
                sh "npm test"
            }
            post {
                always {
                     publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'reports/pa11y', reportFiles: 'index.html', reportName: 'Pally report', reportTitles: ''])
                }
            }
        }
    }
    options {
        ansiColor("xterm")
        timestamps()
    }
}
