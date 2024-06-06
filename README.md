# Cross platform desktop app with local-first architecture.

### Tech:

- Next.js
- Tauri
- Sqlite with encryption enabled
- SeaORM

### Building

This project uses `cargo-run-bin` to use `sea-orm-cli` to build from `Cargo.toml` instead of using it globally. This makes sure there's no any "It works on my machine" drama. So make sure to install `cargo-run-bin` globally:

```
cargo install cargo-run-bin
cargo bin --install
```

You can now use `cargo sea-orm-cli` for migrations and seed.
