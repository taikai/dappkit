export enum Errors {
  NoPrivateKeyFoundOnOptions = `No private key found on options`,
  ProviderOptionsAreMandatoryIfIPC = `Provider options are mandatory if chosen provider is IPC`,
  NoEthereumObjectFoundOnWindow = `No ethereum object found on window`,
  WindowObjectNotFound = `Window object not found`,
  MissingWeb3ProviderHost = `Missing options.web3Host parameter`,
  MissingAbiInterfaceFromArguments = `Missing ABI Interface from arguments list or empty Abi`,
  AmountNeedsToBeHigherThanZero = `Amount needs to be higher than zero`,
  MissingContractAddress = `Missing contract address`,
}