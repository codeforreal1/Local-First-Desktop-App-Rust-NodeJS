include .env

generate-entities:
	cargo bin sea-orm-cli generate entity -u $(DATABASE_URL) -o src/lib/db/entity --with-serde both