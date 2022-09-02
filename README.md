# Simple Signature Creation Verification

Simple script that demonstrates web3 wallet signature creation and verification.

If you like this check me out on Twitter at [@codingwithmanny](https://twitter.com/codingwithmanny)

## Requirements

- NVM or Node 16.17.0

## Local Setup

```bash
yarn install;
# npm install;
```

## Running Script

```bash
yarn start;
# npm start;

# Expected Output:

# {
#   wallet: Wallet {
#     _isSigner: true,
#     _signingKey: [Function (anonymous)],
#     address: '0x14A17B3a77CFECb226C4e3723302f9926D887A3b',
#     _mnemonic: [Function (anonymous)],
#     provider: null
#   }
# }
# {
#   signatureHash: '0xb7f33cf59017db81ba23ce43d0501b7071011b2afed32e934fdbacc5f1776f396922fb5beac15c48c28f87a09df3224d476e8be9ab0978f70bc1002c6e7761f41c'
# }
# { verifiedAddress: '0x14A17B3a77CFECb226C4e3723302f9926D887A3b' }
# { isVerified: true }
```

## License

MIT - See [LICENSE](https://github.com/codingwithmanny/simple-signature-creation-verification/blob/main/LICENSE)