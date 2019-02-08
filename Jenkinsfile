pipeline {
    agent any
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
