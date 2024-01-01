# Define the content what need to write to the file
$envContent = @"
CONNECTION_STRING=$env:CONNECTION_STRING
"@

# Write the content to a new .env file
$envContent | Set-Content -Path .env