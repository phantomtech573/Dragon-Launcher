.yml
"dependabot"

# To get started with Dependabot version updates, you'll need to specify which package ecosystems to update and where the package manifests are located.
-Please see the documentation for all [configuration options](https://docs.github.com/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-fi)
__________________________
# Dependabot.yml
  -version: latest
   -updates:stable-package
    -ecosystem: "pkg search <packages>" 
* **See documentation 
<possible values>
      -directory: "<The property>"
       -updates-package-ecosystem
    -values: 
     "<npm:
-bundler, 
-composer, 
-devcontainers, 
-dotnet-sdk, 
-maven, 
-mix, 
-cargo, 
-gradle, 
-nuget, 
-gomod, 
-docker, 
-docker-compose, 
-elm, 
-gitsubmodule, 
-github-actions, 
-pip, 
-terraform, 
-pub, 
-rust-toolchain, 
-swift, 
-bun, 
-uv, 
-pkg, 
-helm, 
-conda, 
-julia, 
-bazel, 
-opentofu,   |
-pre-commit>"|

# Location of package manifests|
    schedule:
      interval: "weekly"|