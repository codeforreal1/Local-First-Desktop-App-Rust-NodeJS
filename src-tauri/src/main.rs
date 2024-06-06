// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use tauri_plugin_shell::{process::CommandEvent, ShellExt};

#[tokio::main]
async fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            match app.app_handle().shell().sidecar("server") {
                Ok(server) => match server.spawn() {
                    Ok((mut rx, _)) => {
                        tauri::async_runtime::spawn(async move {
                            #[cfg(debug_assertions)]
                            while let Some(event) = rx.recv().await {
                                match event {
                                    CommandEvent::Stdout(line) => {
                                        println!("[server] {:?}", String::from_utf8(line));
                                    }
                                    CommandEvent::Stderr(line) => {
                                        println!("[server] {:?}", String::from_utf8(line));
                                    }
                                    _ => {}
                                }
                            }
                        });
                    }
                    Err(err) => panic!("{err}"),
                },
                Err(err) => panic!("Server failed to start {}", err),
            };
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
