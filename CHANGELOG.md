# [4.14.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.13.0...v4.14.0) (2025-06-25)


### Features

* enhance QA agent as senior developer with code review capabilities and major brownfield improvements ([3af3d33](https://github.com/bmadcode/BMAD-METHOD/commit/3af3d33d4a40586479a382620687fa99a9f6a5f7))

# [4.13.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.12.0...v4.13.0) (2025-06-24)


### Features

* **ide-setup:** add support for Cline IDE and configuration rules ([#262](https://github.com/bmadcode/BMAD-METHOD/issues/262)) ([913dbec](https://github.com/bmadcode/BMAD-METHOD/commit/913dbeced60ad65086df6233086d83a51ead81a9))

# [4.12.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.11.0...v4.12.0) (2025-06-23)


### Features

* **dev-agent:** add quality gates to prevent task completion with failing validations ([#261](https://github.com/bmadcode/BMAD-METHOD/issues/261)) ([45110ff](https://github.com/bmadcode/BMAD-METHOD/commit/45110ffffe6d29cc08e227e22a901892185dfbd2))

# [4.11.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.10.3...v4.11.0) (2025-06-21)


### Bug Fixes

* resolve web bundles directory path when using relative paths in NPX installer ([5c8485d](https://github.com/bmadcode/BMAD-METHOD/commit/5c8485d09ffec60ad4965ced62f4595890cb7535))


### Features

* add markdown-tree integration for document sharding ([540578b](https://github.com/bmadcode/BMAD-METHOD/commit/540578b39d1815e41e11f0e87545de3f09ee54e1))

## [4.10.3](https://github.com/bmadcode/BMAD-METHOD/compare/v4.10.2...v4.10.3) (2025-06-20)


### Bug Fixes

* bundle update ([2cf3ba1](https://github.com/bmadcode/BMAD-METHOD/commit/2cf3ba1ab8dd7e52584bef16a96e65e7d2513c4f))

## [4.10.2](https://github.com/bmadcode/BMAD-METHOD/compare/v4.10.1...v4.10.2) (2025-06-20)


### Bug Fixes

* file formatting ([c78a35f](https://github.com/bmadcode/BMAD-METHOD/commit/c78a35f547459b07a15d94c827ec05921cd21571))

## [4.10.1](https://github.com/bmadcode/BMAD-METHOD/compare/v4.10.0...v4.10.1) (2025-06-20)


### Bug Fixes

* SM sometimes would skip the rest of the epic stories, fixed ([1148b32](https://github.com/bmadcode/BMAD-METHOD/commit/1148b32fa97586d2f86d07a70ffbf9bb8c327261))

# [4.10.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.9.2...v4.10.0) (2025-06-19)


### Features

* Core Config and doc sharding is now optional in v4 ([ff6112d](https://github.com/bmadcode/BMAD-METHOD/commit/ff6112d6c2f822ed22c75046f5a14f05e36041c2))

## [4.9.2](https://github.com/bmadcode/BMAD-METHOD/compare/v4.9.1...v4.9.2) (2025-06-19)


### Bug Fixes

* bad brownfield yml ([09d2ad6](https://github.com/bmadcode/BMAD-METHOD/commit/09d2ad6aea187996d0a2e1dff27d9bf7e3e6dc06))

## [4.9.1](https://github.com/bmadcode/BMAD-METHOD/compare/v4.9.0...v4.9.1) (2025-06-19)


### Bug Fixes

* dist bundles updated ([d9a989d](https://github.com/bmadcode/BMAD-METHOD/commit/d9a989dbe50da62cf598afa07a8588229c56b69c))

# [4.9.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.8.0...v4.9.0) (2025-06-19)


### Features

* dev can use debug log configured in core-config.yml ([0e5aaf0](https://github.com/bmadcode/BMAD-METHOD/commit/0e5aaf07bbc6fd9f2706ea26e35f5f38fd72147a))

# [4.8.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.7.0...v4.8.0) (2025-06-19)


### Bug Fixes

* installer has fast v4 update option now to keep the bmad method up to date with changes easily without breaking any customizations from the user. The SM and DEV are much more configurable to find epics stories and architectureal information when the prd and architecture are deviant from v4 templates and/or have not been sharded. so a config will give the user the option to configure the SM to use the full large documents or the sharded versions! ([aea7f3c](https://github.com/bmadcode/BMAD-METHOD/commit/aea7f3cc86e749d25ed18bed761dc2839023b3b3))
* prevent double installation when updating v4 ([af0e767](https://github.com/bmadcode/BMAD-METHOD/commit/af0e767ecf1b91d41f114e1a5d7bf5da08de57d6))
* resolve undefined config properties in performUpdate ([0185e01](https://github.com/bmadcode/BMAD-METHOD/commit/0185e012bb579948a4de1ea3950db4e399761619))
* update file-manager to properly handle YAML manifest files ([724cdd0](https://github.com/bmadcode/BMAD-METHOD/commit/724cdd07a199cb12b82236ad34ca1a0c61eb43e2))


### Features

* add early v4 detection for improved update flow ([29e7bbf](https://github.com/bmadcode/BMAD-METHOD/commit/29e7bbf4c5aa7e17854061a5ee695f44324f307a))
* add file resolution context for IDE agents ([74d9bb4](https://github.com/bmadcode/BMAD-METHOD/commit/74d9bb4b2b70a341673849a1df704f6eac70c3de))
* update web builder to remove IDE-specific properties from agent bundles ([2f2a1e7](https://github.com/bmadcode/BMAD-METHOD/commit/2f2a1e72d6a70f8127db6ba58a563d0f289621c3))

# [4.7.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.6.3...v4.7.0) (2025-06-19)


### Features

* extensive bmad-kb for web orchestrator to be much more helpful ([e663a11](https://github.com/bmadcode/BMAD-METHOD/commit/e663a1146b89e7b5078d9726649a51ae5624da46))

## [4.6.3](https://github.com/bmadcode/BMAD-METHOD/compare/v4.6.2...v4.6.3) (2025-06-19)


### Bug Fixes

* SM fixed file resolution issue in v4 ([61ab116](https://github.com/bmadcode/BMAD-METHOD/commit/61ab1161e59a92d657ab663082abcaf26729fa6b))

## [4.6.2](https://github.com/bmadcode/BMAD-METHOD/compare/v4.6.1...v4.6.2) (2025-06-19)


### Bug Fixes

* installer upgrade path fixed ([bd6a558](https://github.com/bmadcode/BMAD-METHOD/commit/bd6a55892906077a700f488bde175b57e846729d))

## [4.6.1](https://github.com/bmadcode/BMAD-METHOD/compare/v4.6.0...v4.6.1) (2025-06-19)


### Bug Fixes

* expansion pack builder now includes proper dependencies from core as needed, and default template file name save added to template llm instructions ([9dded00](https://github.com/bmadcode/BMAD-METHOD/commit/9dded003565879901246885d60787695e0d0b7bd))

# [4.6.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.5.1...v4.6.0) (2025-06-18)


### Bug Fixes

* orchestractor yml ([3727cc7](https://github.com/bmadcode/BMAD-METHOD/commit/3727cc764a7c7295932ff872e2e5be8b4c4e6859))


### Features

* removed some templates that are not ready for use ([b03aece](https://github.com/bmadcode/BMAD-METHOD/commit/b03aece79e52cfe9585225de5aff7659293d9295))

## [4.5.1](https://github.com/bmadcode/BMAD-METHOD/compare/v4.5.0...v4.5.1) (2025-06-18)


### Bug Fixes

* docs had some ide specific errors ([a954c7e](https://github.com/bmadcode/BMAD-METHOD/commit/a954c7e24284a6637483a9e47fc63a8f9d7dfbad))

# [4.5.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.4.2...v4.5.0) (2025-06-17)


### Bug Fixes

* installer relative path issue for npx resolved ([8b9bda5](https://github.com/bmadcode/BMAD-METHOD/commit/8b9bda5639ec882f1887f20b4610a6c2183042c6))
* readme updated to indicate move of web-bundles ([7e9574f](https://github.com/bmadcode/BMAD-METHOD/commit/7e9574f571f41ae5003a1664d999c282dd7398be))
* temp disable yml linting ([296c2fb](https://github.com/bmadcode/BMAD-METHOD/commit/296c2fbcbd9ac40b3c68633ba7454aacf1e31204))
* update documentation and installer to reflect .roomodes file location in project root ([#236](https://github.com/bmadcode/BMAD-METHOD/issues/236)) ([bd7f030](https://github.com/bmadcode/BMAD-METHOD/commit/bd7f03016bfa13e39cb39aedb24db9fccbed18a7))


### Features

* bmad the creator expansion with some basic tools for modifying bmad method ([2d61df4](https://github.com/bmadcode/BMAD-METHOD/commit/2d61df419ac683f5691b6ee3fab81174f3d2cdde))
* can now select different web bundles from what ide agents are installed ([0c41633](https://github.com/bmadcode/BMAD-METHOD/commit/0c41633b07d7dd4d7dda8d3a14d572eac0dcbb47))
* installer offers option to install web bundles ([e934769](https://github.com/bmadcode/BMAD-METHOD/commit/e934769a5e35dba99f59b4e2e6bb49131c43a526))
* robust installer ([1fbeed7](https://github.com/bmadcode/BMAD-METHOD/commit/1fbeed75ea446b0912277cfec376ee34f0b3d853))

## [4.4.2](https://github.com/bmadcode/BMAD-METHOD/compare/v4.4.1...v4.4.2) (2025-06-17)


### Bug Fixes

* single agent install and team installation support ([18a382b](https://github.com/bmadcode/BMAD-METHOD/commit/18a382baa4e4a82db20affa3525eb951af1081e0))

## [4.4.1](https://github.com/bmadcode/BMAD-METHOD/compare/v4.4.0...v4.4.1) (2025-06-17)

### Bug Fixes

- installer no longer suggests the bmad-method directory as defauly ([e2e1658](https://github.com/bmadcode/BMAD-METHOD/commit/e2e1658c07f6957fea4e3aa9e7657a650205ee71))

# [4.4.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.3.0...v4.4.0) (2025-06-16)

### Features

- improve docs, technical preference usage ([764e770](https://github.com/bmadcode/BMAD-METHOD/commit/764e7702b313f34bb13a8bcce3b637699bb2b8ec))
- web bundles updated ([f39b495](https://github.com/bmadcode/BMAD-METHOD/commit/f39b4951e9e37acd7b2bda4124ddd8edb7a6d0df))

# [5.0.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.1.0...v5.0.0) (2025-06-15)

### Bug Fixes

- add docs ([48ef875](https://github.com/bmadcode/BMAD-METHOD/commit/48ef875f5ec5b0f0211baa43bbc04701e54824f4))
- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- BMAD install creates `.bmad-core/.bmad-core/` directory structure + updates ([#223](https://github.com/bmadcode/BMAD-METHOD/issues/223)) ([28b313c](https://github.com/bmadcode/BMAD-METHOD/commit/28b313c01df41961cebb71fb3bce0fcc7b4b4796))
- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))
- update dependency resolver to support both yml and yaml code blocks ([ba1e5ce](https://github.com/bmadcode/BMAD-METHOD/commit/ba1e5ceb36f4a0bb204ceee40e92725d3fc57c5f))
- update glob usage to modern async API ([927515c](https://github.com/bmadcode/BMAD-METHOD/commit/927515c0895f94ce6fb0adf7cabe2f978c1ee108))
- update yaml-format.js to use dynamic chalk imports ([b53d954](https://github.com/bmadcode/BMAD-METHOD/commit/b53d954b7aac68d25d688140ace3b98a43fa0e5f))

### Features

- enhance installer with multi-IDE support and sync version bumping ([ebfd4c7](https://github.com/bmadcode/BMAD-METHOD/commit/ebfd4c7dd52fd38d71a4b054cd0c5d45a4b5d226))
- improve semantic-release automation and disable manual version bumping ([38a5024](https://github.com/bmadcode/BMAD-METHOD/commit/38a5024026e9588276bc3c6c2b92f36139480ca4))
- sync IDE configurations across all platforms ([b6a2f5b](https://github.com/bmadcode/BMAD-METHOD/commit/b6a2f5b25eaf96841bade4e236fffa2ce7de2773))
- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))
- web bundles include a simplified prd with architecture now for simpler project folderes not needing a full plown architecture doc! ([8773545](https://github.com/bmadcode/BMAD-METHOD/commit/877354525e76cd1c9375e009a3a1429633010226))

### BREAKING CHANGES

- Manual version bumping via npm scripts is now disabled. Use conventional commits for automated releases.

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>

# [4.2.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.1.0...v4.2.0) (2025-06-15)

### Bug Fixes

- add docs ([48ef875](https://github.com/bmadcode/BMAD-METHOD/commit/48ef875f5ec5b0f0211baa43bbc04701e54824f4))
- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))

### Features

- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))

# [4.2.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.1.0...v4.2.0) (2025-06-15)

### Bug Fixes

- add docs ([48ef875](https://github.com/bmadcode/BMAD-METHOD/commit/48ef875f5ec5b0f0211baa43bbc04701e54824f4))
- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))

### Features

- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))

# [4.2.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.1.0...v4.2.0) (2025-06-15)

### Bug Fixes

- add docs ([48ef875](https://github.com/bmadcode/BMAD-METHOD/commit/48ef875f5ec5b0f0211baa43bbc04701e54824f4))
- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))

### Features

- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))

# [4.2.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.1.0...v4.2.0) (2025-06-15)

### Bug Fixes

- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))

### Features

- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))

# [4.2.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.1.0...v4.2.0) (2025-06-15)

### Bug Fixes

- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))

### Features

- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))

# [4.2.0](https://github.com/bmadcode/BMAD-METHOD/compare/v4.1.0...v4.2.0) (2025-06-15)

### Bug Fixes

- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))

### Features

- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))

# [1.1.0](https://github.com/bmadcode/BMAD-METHOD/compare/v1.0.1...v1.1.0) (2025-06-15)

### Features

- update badges to use dynamic NPM version ([5a6fe36](https://github.com/bmadcode/BMAD-METHOD/commit/5a6fe361d085fcaef891a1862fc67878e726949c))

## [1.0.1](https://github.com/bmadcode/BMAD-METHOD/compare/v1.0.0...v1.0.1) (2025-06-15)

### Bug Fixes

- resolve NPM token configuration ([620b09a](https://github.com/bmadcode/BMAD-METHOD/commit/620b09a556ce8d61ad1a4d8ee7c523d263abd69c))

# 1.0.0 (2025-06-15)

### Bug Fixes

- Add bin field to root package.json for npx execution ([01cb46e](https://github.com/bmadcode/BMAD-METHOD/commit/01cb46e43da9713c24e68e57221ebe312c53b6ee)), closes [bmadcode/BMAD-METHOD#v4](https://github.com/bmadcode/BMAD-METHOD/issues/v4)
- Add glob dependency for installer ([8d788b6](https://github.com/bmadcode/BMAD-METHOD/commit/8d788b6f490a94386658dff2f96165dca88c0a9a))
- Add installer dependencies to root package.json ([0a838e9](https://github.com/bmadcode/BMAD-METHOD/commit/0a838e9d579a5efc632707d237194648394fbd61))
- auto semantic versioning fix ([166ed04](https://github.com/bmadcode/BMAD-METHOD/commit/166ed047671cccab2874fd327efb1ac293ae7276))
- auto semantic versioning fix again ([11260e4](https://github.com/bmadcode/BMAD-METHOD/commit/11260e43950b6bf78d68c759dc3ac278bc13f8a8))
- Remove problematic install script from package.json ([cb1836b](https://github.com/bmadcode/BMAD-METHOD/commit/cb1836bd6ddbb2369e2ed97a1d2f5d6630a7152b))
- resolve NPM token configuration ([b447a8b](https://github.com/bmadcode/BMAD-METHOD/commit/b447a8bd57625d02692d7e2771241bacd120c631))

### Features

- add versioning and release automation ([0ea5e50](https://github.com/bmadcode/BMAD-METHOD/commit/0ea5e50aa7ace5946d0100c180dd4c0da3e2fd8c))
