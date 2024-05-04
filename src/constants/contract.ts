import { ethers } from "ethers";
import AuthAbi from "./ABI/Auth.json";
import ContentAbi from "./ABI/Content.json";

export const getAuthContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_authorization_contract_address,
    AuthAbi,
    providerOrSigner
  );
export const getContentContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_content_contract_address,
    ContentAbi,
    providerOrSigner
  );
