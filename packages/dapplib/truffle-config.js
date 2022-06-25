require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food make raise mad method coral light army gather'; 
let testAccounts = [
"0xfba54a8b4de037a418c2f77bf8d9239dc08277681ff2b28eac9394d3e2d89229",
"0x2252ce0e379b8da209f1f31cc521db8a3683ffbdd262084a09b1cc3adc79aa4a",
"0x31df921a67d6c68e7a791f8f60abc298ced4639006042a42a24deca23e78783e",
"0xb5546cde5f735033b4458d949f7dd46a30c8c95c1ff150ea8027c72f4973a74f",
"0x5fcdd9d7842f53faf87557c917237094e96bb31bddb63604a83831cc24f85a34",
"0x22193c40f87d054fd5533294c49423760309ba411fc9b27b1a8810993816458f",
"0xd5233028b5c0cbe3e1e9a711972813043ba59f064119d414eb9af4823cf4a108",
"0x00e5cba697576028578edca0923771e2781510eeda457f4a77b45e5120b2f5d1",
"0x45cf1237d88780ec3e1b350d8509638c5c3452025a6671d15c41622ea99c99a7",
"0x00faa5852774029293345c510a761daba087755bb68631e3e78b292e73d69ab1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

