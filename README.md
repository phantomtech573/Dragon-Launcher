Main
 - [Dependabot.yml](https://docs.github.com/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
---
  ## [Dependabot](https://docs.github.com/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
---
 - # Dependabot.yml #
version: 2
updates:latest/stable-weekly
  - package-ecosystem: 
# See documentation for possible values #
    directory: "The property" 
"updates/package-ecosystem"="value"
---
"value"="values" 
"values"="npm, bundler, composer, devcontainers, dotnet-sdk, maven, mix, cargo, gradle, nuget, gomod, docker, docker-compose, elm, gitsubmodule, github-actions, pip, terraform, pub, rust-toolchain, swift, bun, uv, vcpkg, helm, conda, julia, bazel, opentofu, pre-commit"
---
  # Location of package manifests #
    schedule:
      interval: "weekly"
