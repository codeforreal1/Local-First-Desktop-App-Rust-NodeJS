# Running Node.js project as a single executable binary

Steps:

1. Make a single javascript bundle file using `esbuild`.

```
pnpm bundle
```

2. Package the bundled file into a single executable binary using `@yao-pkg/pkg`

```
pkg bundle/bundle.js -o ./bin/server-<your platform>
```

You need to make binaries for the platform you want to support. By default it generates one for the platform that your machine is using. See [target](https://github.com/yao-pkg/pkg?tab=readme-ov-file#targets) section for more info.

OR

If you have Rust installed, you can just run:

```
pnpm package
```

The above command will add appropriate binary name of your platform.
