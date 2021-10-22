const https = require('https')

const data = new TextEncoder().encode(
  JSON.stringify({
  "script": "local a =1",
  "key": "r7krWnmdqhk0UGhYnttzliwiPKBM3RQl1tgy3UOkQ0crvEmnti",
  "options": {
    "DisableSuperOperators": true,
    "MaximumSecurityEnabled": true,
    "EncryptAllStrings": true,
    "DisableAllMacros": true,
    "EnhancedOutput": true,
    "CompressedOutput": true,
    "PremiumFormat": false,
    "ByteCodeMode": "Symbols1"
  }
})
)

const options = {
  hostname: '149.28.234.4',
  port: 8080,
  path: '/obfuscate',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
