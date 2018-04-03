# Azure Helloworld


## Azure CLI command
### Install for mac
```
brew install azure-cli
brew link --overwrite python3
```

### Login first
```
# login
az login

# create web app deployment user
az webapp deployment user set --user-name <username> --password <password>
```

### Create Resources
Basically we need to create the following...

#### create resource group
```
az group create -l westus -n sy-training-resource-group
```

#### create app service
```
az appservice plan create -g sy-training-resource-group -n sy-training-app-service
```

#### create web app
Add `--deployment-local-git` if you want to deploy from local git
```
az webapp create -g sy-training-resource-group -p sy-training-app-service -n sy-training-webapp
```

#### use local git to deploy code
```
az webapp deployment source config-local-git --name sy-training-webapp -g sy-training-resource-group
```

#### Add the git remote for pushing...
```
 g remote add test https://<...>/sy-training-webapp.git
```
