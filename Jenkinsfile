pipeline 
{
    agent any
    
    tools {nodejs "nodejs"}
    
    stages
    {
        stage('checkout')
        {
            steps{
                withCredentials([string(credentialsId: 'Nitin_Git', variable: 'git')]) {
                checkout([$class: 'GitSCM',
                branches: [[name: 'origin/master']],
                extensions: [[$class: 'WipeWorkspace']],
                userRemoteConfigs: [[url: "${git}"]]
                ])
                }
             }
        }
        stage('Dependencies') 
        {
            steps
            {
               sh 'npm install'
            }
        }
        /*stage('test')
        {
              steps
              {
                  sh 'npm test'
              }
        }*/
        
        stage('Build')
        {
            steps 
            {
                sh 'npm build'
                
            }
        }
        stage('Sonarqube') 
        {
            steps 
            {
                sh 'npm run sonar'
            }
        }
        stage ('zip')
        {
            steps
            {
                 
                sh 'cd dist/Multiply; zip -r ../../nitin.zip .'
            }
        }
        stage ( 'nexus')
        {
            steps{
               
                sh script: 'curl -v -u trainee:trainee --upload-file nitin.zip http://3.14.251.87:8081/nexus/content/repositories/devopstraining/Nitin_Angular/nitin.zip'
            }
            
        }
        /*stage ('Deploy') {
            steps {
                  withCredentials([file(credentialsId: 'atlassian-tools', variable: 'secret_key_for_tomcat')]) {
                  sh 'scp -i ${secret_key_for_tomcat} nitin.zip ubuntu@18.191.215.188:/var/lib/tomcat8/webapps/'
                  sh 'ssh -i ${secret_key_for_tomcat} ubuntu@18.191.215.188 "cd /var/lib/tomcat8/webapps/;mkdir nitin03;unzip -o nitin.zip -d ./nitin03;"'
              }
            }
        }*/ 
    }
}
