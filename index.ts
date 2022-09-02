// Imports
import { ethers } from 'ethers';

/**
 * Main function
 */
const init = async () => {
    // Create A Wallet
    const wallet = ethers.Wallet.createRandom();
    console.log({ wallet });
    
    // Message we want to sign
    const message = "This should be coming from Manny";
    
    // Signs the messages, making it a signature
    const signatureHash = await wallet.signMessage(message);
    console.log({ signatureHash });

    // Creates type SignatureLike
    // {
    //     r: string; // first 32 bytes of signature
    //     s?: string; // second 32 bytes of signature
    //     v?: number; // final 1 byte of signature
    //     yParityAndS: string // The compact representation of the s and v
    //     _vs?: string, // (deprecated) The compact representation of the s and v
    //     recoveryParam?: number; // The normalized (i.e. 0 or 1) value of v
    //     compact: string // The full signature using compact representation
    // }
    const signature = await ethers.utils.splitSignature(signatureHash);

    // Verify the address of the signature and message so that it matches the originating wallet signer
    const verifiedAddress = await ethers.utils.verifyMessage(message, signature);
    console.log({ verifiedAddress });
    console.log({ isVerified: verifiedAddress === wallet.address });
};

// Init
init();
