pipeline {
  agent any

  options {
    timestamps()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install'
      }
    }

    stage('Run Playwright tests') {
      steps {
        bat 'npx playwright test'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**,test-results/**', allowEmptyArchive: true, fingerprint: true
      junit testResults: 'test-results/**/*.xml', allowEmptyResults: true
    }
  }
}