BigGuy573.io-master-patch-34537/DE_BUG_ROBO.js
##[Please see the documentation for all configuration options](https://docs.github.com/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
# Dependabot.yml)
  * **version: 2** *
- updates:latest/stable-weekly -
  - package-ecosystem: "" -
- ```See documentation for possible values``` -
    ```directory_The property```
```updates/package-ecosystem_value```
```values_npm```
bundler, composer, devcontainers, dotnet-sdk, maven, mix, cargo, gradle, nuget, gomod, docker, docker-compose, elm, gitsubmodule, github-actions, pip, terraform, pub, rust-toolchain, swift, bun, uv, vcpkg, helm, conda, julia, bazel, opentofu, pre-commit"```
---```
# Location of package manifests #
    schedule: "daily "
      interval: "weekly"
main
`Toggle menu
 / 
GitLab CLI (glab)
glab repo
glab repo contributors
glab repo contributors
Get repository contributors list.

glab repo contributors [flags]
Aliases
users
Examples
console
# List contributors for the current repository
$ glab repo contributors

# List contributors for a specific repository
$ glab repo contributors -R gitlab-com/www-gitlab-com
Options
  -o, --order string      Return contributors ordered by name, email, or commits (orders by commit date) fields. (default "commits")
  -F, --output string     Format output as: text, json. (default "text")
  -p, --page int          Page number. (default 1)
  -P, --per-page int      Number of items to list per page. (default 30)
  -R, --repo OWNER/REPO   Select another repository. Can use either OWNER/REPO or `GROUP/NAMESPACE/REPO` format. Also accepts full URL or Git URL.
  -s, --sort string       Sort direction for --order field: asc or desc.
Options inherited from parent commands
  -h, --help   Show help for this command.
Was this page helpful?
GitLab Docs logo
Facebook
LinkedIn
Twitter
YouTube
Creative Commons License
Company
About GitLab
View pricing
Try GitLab for free
Feedback
View page source
Edit in Web IDE
Contribute to GitLab
Suggest updates
Help & Community
Get certified
Get support
Post on the GitLab forum
Resources
Terms
Privacy statement
Use of generative AI
Acceptable use of user licenses
Cookie Preferences
Administer GitLab Dedica…
Releases and versioning
GitLab Dedicated releases and versioning
Tier: Ultimate
Offering: GitLab Dedicated
GitLab Dedicated follows a specific versioning model and release schedule for your instance to balance stability with access to new features and security patches.

Versioning model
Your instance runs on the previous minor version (N-1) relative to the current GitLab release. For example, when GitLab 16.9 is available, your instance runs GitLab 16.8.

This approach provides:

Stability: Additional time for testing and validation before deployment.
Security: Critical patches are still applied promptly through emergency maintenance.
Predictability: Regular upgrade schedule aligned with monthly release cycles.
New features become available on your instance approximately 1 month after their initial GitLab release.

Check your GitLab version
You can check your GitLab version through GitLab itself or through Switchboard.

To check your GitLab version:

In GitLab: In the left sidebar, at the bottom, select Help (  ) > Help, or visit https://your-instance-url/help directly.
In Switchboard: See tenant overview.
Release rollout schedule
Your instance is upgraded during scheduled maintenance windows according to a staggered timeline that begins 5 days after each GitLab release.

Upgrades occur during your assigned maintenance window according to the following schedule, where T is the date of a minor GitLab release:

Calendar days after release	Instance upgrades begin
T+5	EMEA and Americas (Option 1) regions
T+6	Asia Pacific region
T+10	Americas (Option 2) region
For example, GitLab 16.9 released on 2024-02-15. Instances in the EMEA and Americas (Option 1) regions were upgraded to 16.8 on 2024-02-20, 5 days after the 16.9 release.

If maintenance is deferred due to operational constraints, upgrades occur in the next available maintenance window.

Update frequency
Your instance receives regular updates during your preferred maintenance window:

Monthly updates include:

One minor release
Two patch releases
Additional updates might include:

Critical security patches through emergency maintenance
Infrastructure improvements
Performance optimizations
Patch validation timeline
Critical patches follow an accelerated timeline to ensure security vulnerabilities are addressed quickly:

Development: Bug fixes must be merged into the stable branch at least two business days before the expected patch release date.
Patch release: A patch is released for a security vulnerability or critical bug.
Validation (0-24 hours): The patch is validated in staging environments.
Emergency deployment: The patch is deployed to your instance through emergency maintenance procedures.
Patch release schedule
Monthly releases occur during the week that follows the third Thursday of each month.

Critical patches are released twice monthly on:

Wednesday before the monthly release week
Wednesday after the monthly release week
For example, if the third Thursday is January 16, 2025:

Monthly release week: January 20-24, 2025
First patch release: January 15, 2025 (Wednesday before)
Second patch release: January 29, 2025 (Wednesday after)
Non-critical patches are deployed to your instance in the next scheduled maintenance window.

Internal releases
Internal releases are private releases used to remediate critical security vulnerabilities and high-severity bugs on GitLab Dedicated instances before public disclosure. These releases are deployed through emergency maintenance procedures.

Critical fixes that can’t wait for the next scheduled patch are delivered through internal releases to ensure your instance remains secure and stable.

Bug fixes
GitLab engineering teams work to include bug fixes and performance improvements in your version during scheduled maintenance windows. These fixes are included proactively without action required from you.

Request a bug fix
You can request a specific bug fix if it hasn’t been included in your version.

To request a bug fix:

Submit a support ticket with a link to the merge request or issue that contains the fix.
Wait for a response about whether the request is approved.
If approved, the fix is included in your next scheduled maintenance window.

Not all fixes can be backported due to dependencies, complexity, or compatibility considerations. Each request is evaluated individually.`
