output "container_app_url" {
  value = azurerm_container_app.this.latest_revision_fqdn
}

output "key_vault_name" {
  value = azurerm_key_vault.this.name
}
