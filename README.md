# Cross platform desktop app with local-first architecture.

This project is an example of how to use Node.js as a sidecar in Tauri if you find building the backend in Rust very complex. While, the point of using Rust is to make the desktop app perform better and secure, but you still have the option to use other tech. You can even use Python with this approach. You can find this same project whose backend was written in Rust from [here](https://github.com/codeforreal1/Local-First-Desktop-App-Rust).

### Tech:

- Next.js(UI)
- Node.js(Server)
- Tauri
- Sqlite with Drizzle ORM

### Building

This project uses Hono server created in Node.js as a sidecar for Tauri. The project uses `@yao-pkg/pkg` for compiling the Node.js project into a single binary after making a single bundle js file using esbuild.

For local development:

```
cd src-server
pnpm install
pnpm server:build
```

`pnpm server:build` will create a bundle file and place the server binary inside `src-tauri/bin/server-<platform-architecture>. See [Tauri Sidecar](https://tauri.app/v1/guides/building/sidecar/) for more info.

Then you can run the tauri dev server using:

```
pnpm tauri:dev
pnpm next:dev
```

For prod app build:

```
pnpm tauri:build
```
