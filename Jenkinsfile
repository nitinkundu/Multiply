pipeline 
{
    agent any
    
    tools {nodejs "nodejs"}
    
    stages
    {
        /*stage('checkout')
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
        }*/
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
        stage ('Nexus'){
            steps{
                sh 'ls'
                withCredentials([usernamePassword(credentialsId: 'sudipa_nexus', passwordVariable: 'pass', usernameVariable: 'usr')]) {
                 sh label: '', script: 'curl -u ${usr}:${pass} --upload-file nitin.zip http://3.14.251.87:8081/nexus/content/repositories/devopstraining/Nitin-Angular/nitin.zip'
                }
                
            }
        }
        /*stage ('Deploy'){
            steps{
                 withCredentials([usernamePassword(credentialsId: 'devops-tomcat', passwordVariable: 'pass', usernameVariable: 'userId')]) {
              //withCredentials([usernameColonPassword(credentialsId: 'Tomcat server secret key', variable: 'password1')]) {
     //echo "My password is '${password1}'!"
                    //sh label: '', script:'curl -u "${userId}" "${pass}" http://ec2-18-224-182-74.us-east-2.compute.amazonaws.com:8080/manager/text/undeploy?path=/Subha_Spring_Test_1'
                    sh label: '', script: 'curl -u $userId:$pass http://ec2-18-224-182-74.us-east-2.compute.amazonaws.com:8080/manager/text/undeploy?path=/Nitin-Angular'
                    sh label: '', script: 'curl -u  $userId:$pass --upload-file nitin.zip http://ec2-18-224-182-74.us-east-2.compute.amazonaws.com:8080/manager/text/deploy?config=file:/var/lib/tomcat8/unzip -o nitin.zip\\&path=/Nitin-Angular'
            }
        }*/
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

