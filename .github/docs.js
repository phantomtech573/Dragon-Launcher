`.js
Skip to main content
GitHub Docs
Security and code quality/How-tos/Secure your supply chain/Manage your dependency security/Configure access to private registries
Configuring access to private registries for Dependabot
You can configure Dependabot to access dependencies stored in private registries. You can store authentication information, like passwords and access tokens, as encrypted secrets and then reference these in the Dependabot configuration file. If you have registries on private networks, you can also configure Dependabot access when running Dependabot on self-hosted runners.

Who can use this feature?
Users with write access

In this article
About private registries
Dependabot version updates keeps your dependencies up-to-date and Dependabot security updates updates vulnerable dependencies. Dependabot can access public registries. In addition, you can give Dependabot access to private package registries and private GitHub repositories so that you can keep your private and innersource dependencies as up-to-date and secure as your public dependencies.

In most ecosystems, private dependencies are usually published to private package registries. These private registries are similar to their public equivalents, but they require authentication.

For specific ecosystems, you can configure Dependabot to access only private registries by removing calls to public registries. For more information, see Removing Dependabot access to public registries.

To allow Dependabot access to registries hosted privately or restricted to internal networks, configure Dependabot to run on GitHub Actions self-hosted runners. For more information, see Configuring Dependabot on self-hosted runners.

Configuring private registries
You can configure Dependabot's access to private registries at the org-level. For more information on how to configure that, see Giving security features access to private registries.

You can also configure Dependabot's access to private registries in the dependabot.yml file. The top-level registries key is optional and specifies authentication details.

There are 2 locations in the dependabot.yml file where you can use the registries key:

At the top level, where you define the registries and their access information, if needed.
Within the updates blocks, where you can use registries: "*" to tell Dependabot to use any or all of the registries you defined at the top level.
# registries: gradle-artifactory - provides access details for the gradle-artifactory registry
# registries: "*" - allows Dependabot to use all the defined registries specified at the top level

version: 2
registries:
  gradle-artifactory:
    type: maven-repository
    url: https://acme.jfrog.io/artifactory/my-gradle-registry
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
updates:
  - package-ecosystem: "gradle"
    directory: "/"
    registries: "*"
    schedule:
      interval: "monthly"

You use the following options to specify access settings. Registry settings must contain a type and a url, and typically either a username and password combination or a token.

Parameters	Purpose
REGISTRY_NAME	Required: Defines an identifier for the registry.
type	Required: Identifies the type of registry.
Authentication details	Required: The parameters supported for supplying authentication details vary for registries of different types.
url	Required: The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, https:// is assumed. Dependabot adds or ignores trailing slashes as required.
replaces-base	If the boolean value is true, Dependabot resolves dependencies using the specified url rather than the base URL of that ecosystem.
For more information about the configuration options that are available and about the supported types, see Dependabot options reference.

Storing credentials for Dependabot to use
To give Dependabot access to the private registries supported by GitHub, you store the registry’s access token or secret in the secret store for your repository or organization.

About encrypted secrets for Dependabot
Dependabot secrets are encrypted credentials that you create at either the organization level or the repository level. When you add a secret at the organization level, you can specify which repositories can access the secret. You can use secrets to allow Dependabot to update dependencies located in private package registries. When you add a secret, it's encrypted before it reaches GitHub and it remains encrypted until it's used by Dependabot to access a private package registry.

Dependabot secrets also include secrets that are used by GitHub Actions workflows triggered by Dependabot pull requests. Dependabot itself may not use these secrets, but the workflows require them. For more information, see Troubleshooting Dependabot on GitHub Actions.

After you add a Dependabot secret, you can reference it in the dependabot.yml configuration file like this: ${{secrets.NAME}}, where "NAME" is the name you chose for the secret. For example:

YAML
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
Naming your secrets
The name of a Dependabot secret:

Can only contain alphanumeric characters ([A-Z], [0-9]) or underscores (_). Spaces are not allowed. If you enter lowercase letters these are changed to uppercase.
Must not start with the GITHUB_ prefix.
Must not start with a number.
Adding a repository secret for Dependabot
To create secrets for a personal account repository, you must be the repository owner. To create secrets for an organization repository, you must have admin access.

On GitHub, navigate to the main page of the repository.

Under your repository name, click  Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.

Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.
In the "Security" section of the sidebar, select  Secrets and variables, then click Dependabot.

Click New repository secret.

Type a name for your secret in the Name input box.

Enter the value for your secret.

Click Add secret.

The name of the secret is listed on the Dependabot secrets page. You can click Update to change the secret value. You can click Remove to delete the secret.

Adding an organization secret for Dependabot
When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

To create secrets at the organization level, you must have admin access.

On GitHub, navigate to the main page of the organization.

Under your organization name, click  Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.

Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.
In the "Security" section of the sidebar, select  Secrets and variables, then click Dependabot. Ignore the "Private Registries" option, this is used only by code scanning default setup.

Click New organization secret.

Type a name for your secret in the Name input box.

Enter the Value for your secret.

From the Repository access dropdown list, choose an access policy.

If you chose Selected repositories:

Click .
In the dialog box, select the repositories that can access this secret.
Click Update selection.
Click Add secret.

The name of the secret is listed on the Dependabot secrets page. You can click Update to change the secret value or its access policy. You can click Remove to delete the secret.

Configuring firewall IP rules
You can add Dependabot-related IP addresses to your registries IP allow list.

If your private registry is configured with an IP allow list, you can find the IP addresses Dependabot uses to access the registry in the meta API endpoint, under the actions key. For more information, see REST API endpoints for meta data and About Dependabot on GitHub Actions runners.

Using OIDC for authentication
Dependabot can use OpenID Connect (OIDC) to authenticate with private registries, eliminating the need to store long-lived credentials as repository secrets.

With OIDC-based authentication, Dependabot update jobs can dynamically obtain short-lived credentials from your cloud identity provider, just like GitHub Actions workflows using OIDC federation.

Dependabot supports OIDC authentication for any registry type that uses username and password authentication, when the registry is hosted on one of the following cloud providers:

AWS CodeArtifact
Azure DevOps Artifacts
JFrog Artifactory
To configure OIDC authentication, you need to specify different values instead of username and password in your registry configuration.

AWS CodeArtifact
AWS CodeArtifact requires the values aws-region, account-id, role-name, domain, and domain-owner. The audience field is optional.

registries:
  my-aws-codeartifact-feed:
    type: npm-registry
    url: https://MY_DOMAIN-MY-ACCOUNT_ID.d.codeartifact.REGION.amazonaws.com/npm/MY_REPOSITORY/
    aws-region: REGION
    account-id: '123456789012'
    role-name: MY_ROLE_NAME
    domain: MY_DOMAIN
    domain-owner: '987654321098'
    audience: MY_AUDIENCE  # if required by your feed
Azure DevOps Artifacts
Azure DevOps Artifacts requires the values tenant-id and client-id:

registries:
  my-azure-devops-artifacts-feed:
    type: npm-registry
    url: https://pkgs.dev.azure.com/MY-ORGANIZATION/MY-PROJECT/_packaging/MY-FEED/npm/registry/
    tenant-id: ${{ secrets.AZURE_TENANT_ID }}
    client-id: ${{ secrets.AZURE_CLIENT_ID }}
JFrog Artifactory
JFrog Artifactory requires the values url and jfrog-oidc-provider-name. The values audience and identity-mapping-name are optional:

registries:
  my-jfrog-artifactory-feed:
    type: npm-registry
    url: https://JFROG-PLATFORM-URL/artifactory/api/npm/MY-REPOSITORY
    jfrog-oidc-provider-name: MY-PROVIDER
    audience: MY-AUDIENCE  # if required by your feed
    identity-mapping-name: MY-IDENTITY-MAPPING  # if required by your feed
For more information about how OIDC works, see OpenID Connect.

Allowing external code execution
When you give Dependabot access to one or more registries, external code execution is automatically disabled to protect your code from compromised packages. However, some version updates may fail.

If you need to allow Dependabot to access a private package registry and enable limited external code execution, you can set insecure-external-code-execution to allow. Allowing Dependabot to execute external code in the manifest during updates is not as scary as it sounds:

Any external code execution will only have access to the package managers in the registries associated with the enclosing updates setting.
There is no access allowed to any of the registries defined in the top level registries configuration.
It is common for tooling, such as bundler, mix, pip, and swift, to allow the execution of external code by default.

In this example, the configuration file allows Dependabot to access the ruby-github private package registry. In the same updatessetting, insecure-external-code-executionis set to allow, which means that the code executed by dependencies will only access the ruby-github registry, and not the dockerhub registry.

YAML
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
Supported private registries
Examples of how to configure access to the private registries supported by Dependabot.

cargo-registry
composer-repository
docker-registry
git
goproxy-server
hex-organization
hex-repository
maven-repository
npm-registry
nuget-feed
pub-repository
python-index
rubygems-server
terraform-registry
cargo-registry
The cargo-registry type supports a token.

This registry type will prefix-match the path provided in the url option. This means you can provide multiple credentials to the same host, which can be used to access distinct paths. However, if you don't have multiple registries on the same host, we recommend that you omit the path from the url, so that all paths to the registry will receive credentials.

registries:
  cargo-example:
    type: cargo-registry
    registry: "name-of-your-registry"
    url: https://cargo.cloudsmith.io/foobaruser/test/
    token: "Token ${{secrets.CARGO_TOKEN}}"
We tested this configuration against the https://cargo.cloudsmith.io private registry.

composer-repository
The composer-repository type supports username and password. If the account is a GitHub account, you can use a GitHub personal access token in place of the password.

This registry type will prefix-match the path provided in the url option. This means you can provide multiple credentials to the same host, which can be used to access distinct paths. However, if you don't have multiple registries on the same host, we recommend that you omit the path from the url, so that all paths to the registry will receive credentials.

YAML
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
docker-registry
Dependabot works with any container registries that implement the OCI container registry spec. For more information, see https://github.com/opencontainers/distribution-spec/blob/main/spec.md. Dependabot supports authentication to private registries via a central token service or HTTP Basic Auth. For further details, see Token Authentication Specification in the Docker documentation and Basic access authentication on Wikipedia.

The docker-registry type supports username and password. If the account is a GitHub account, you can use a GitHub personal access token in place of the password.

This registry type will prefix-match the path provided in the url option. This means you can provide multiple credentials to the same host, which can be used to access distinct paths. However, if you don't have multiple registries on the same host, we recommend that you omit the path from the url, so that all paths to the registry will receive credentials.

YAML
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
    replaces-base: true
The docker-registry type can also be used to pull from private Amazon ECR using static AWS credentials.

YAML
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
    replaces-base: true
git
The git type supports username and password. If the account is a GitHub account, you can use a GitHub personal access token in place of the password.

YAML
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
goproxy-server
The goproxy-server type supports username and password. If the account is a GitHub account, you can use a GitHub personal access token in place of the password.

This registry type will prefix-match the path provided in the url option. This means you can provide multiple credentials to the same host, which can be used to access distinct paths. However, if you don't have multiple registries on the same host, we recommend that you omit the path from the url, so that all paths to the registry will receive credentials.

YAML
registries:
  my-private-registry:
    type: goproxy-server
    url: https://acme.jfrog.io/artifactory/api/go/my-repo
    username: octocat
    password: ${{secrets.MY_GO_REGISTRY_TOKEN}}
helm-registry
The helm-registry type only supports HTTP Basic Auth and does not support OCI-compliant registries. If you need to access an OCI-compliant registry for Helm charts, configure a docker-registry instead.

The helm-registry type supports username and password. If the account is a GitHub account, you can use a GitHub personal access token in place of the password.

This registry type will prefix-match the path provided in the url option. This means you can provide multiple credentials to the same host, which can be used to access distinct paths. However, if you don't have multiple registries on the same host, we recommend that you omit the path from the url, so that all paths to the registry will receive credentials.

YAML
registries:
  helm_registry:
    type: helm-registry
    url: https://registry.example.com
    username: octocat
    password: ${{secrets.MY_REGISTRY_PASSWORD}}
hex-organization
The hex-organization type supports organization and key.

This registry type will prefix-match the path provided in the url option. This means you can provide multiple credentials to the same host, which can be used to access distinct paths. However, if you don't have multiple registries on the same host, we recommend that you omit the path from the url, so that all paths to the registry will receive credentials.

YAML
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
hex-repository
The hex-repository type supports an authentication key.

repo is a required field, which must match the name of the repository used in your dependency declaration.

The public-key-fingerprint is an optional configuration field, representing the fingerprint of the public key for the Hex repository. public-key-fingerprint is used by Hex to establish trust with the private repository. The public-key-fingerprint field can be either listed in plaintext or stored as a Dependabot secret.

YAML
registries:
   github-hex-repository:
     type: hex-repository
     repo: private-repo
     url: https://private-repo.example.com
     auth-key: ${{secrets.MY_AUTH_KEY}}
     public-key-fingerprint: ${{secrets.MY_PUBLIC_KEY_FINGERPRINT}}
maven-repository
The maven-repository type supports username, password and replaces-base. If the account is a GitHub account, you can use a GitHub personal access token in place of the password.

This registry type will prefix-match the path provided in the url option. This means you can provide multiple credentials to the same host, which can be used to access distinct paths. However, if you don't have multiple registries on the same host, we recommend that you omit the path from the url, so that all paths to the registry will receive credentials.

YAML
registries:
  maven-artifactory:
    type: maven-repository
    url: https://acme.jfrog.io/artifactory/my-maven-registry
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
    replaces-base: true
You can also use OIDC authentication to access JFrog Artifactory. With OIDC, Dependabot dynamically obtains short-lived credentials instead of using static credentials.

YAML
registries:
  maven-artifactory-oidc:
    type: maven-repository
    url: https://acme.jfrog.io/artifactory/my-maven-registry
    tenant-id: ${{secrets.ARTIFACTORY_TENANT_ID}}
    client-id: ${{secrets.ARTIFACTORY_CLIENT_ID}}
    replaces-base: true
npm-registry
The npm-registry type supports username and password, or token. If the account is a GitHub account, you can use a GitHub personal access token in place of the password.

When using username and password, your .npmrc's auth token may contain a base64 encoded _password; however, the password referenced in your Dependabot configuration file must be the original (unencoded) password.

Note

When using npm.pkg.github.com, d`
