require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note right purpose inner narrow flat that'; 
let testAccounts = [
"0x48eb6cefd00bb7d28339d5a20b18e5e3600ca13cc01eb23a582ad2fe9f6bfd8c",
"0x7513aba2baf7727396464b0e7e54816d28f420aeb3322b62d7fee2928026072b",
"0x88c115f99ac9866c2ceb7db686da4d5504dbd6dab0bdeb608479ba7b1438f0ad",
"0x6458e9b664808f23d60d3d26c6b0245bad2466c2d7b918475d883a820344c7d7",
"0x73d453305e9708920e9652ee6cdae2bb180aecedae2be8266afbcca80418761a",
"0xffece75537b60d7939499f01551240a85a29309502e5577908e6a9fda6b539e9",
"0x6ccdf2678bc9df2d666fd589aba9cd95989137af97a7298d9fea100a75f5bf0e",
"0x59a72ea1d6d537f256cb35e95e244073a471e2647e39f035881d0beb7cd0f6e3",
"0x756abcf8a35bbcf7a0bff75de2441fd3d8e240ed96e65732dbc2d146bd32f2a3",
"0x56449365a6677bb59fa6b2720a75a497eb0731fe2a12ecb83d2e12ce644a2ce5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
