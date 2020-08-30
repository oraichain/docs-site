---
id: TokenEconomics
title: Token Economics
---

## Token Economics
When we call **ORAI token**, it means that it is native ORAI tokens created and contained in the Oraichain network. At the beginning, we are basing on ERC20 to issue ORAI token on the Ethereum network that we call **ERC20 ORAI token**.

### How ORAI token is used
The ORAI token is required in order to run an AI request sent to the Oraichain network. The token plays a role as transaction fee that is paid for request-executing validators, AI-API providers, test-case providers, and block-creating validators.

#### Transaction fee
Transaction fee is different depending on fee requirement of request-executing validators, AI-API providers, and test-case providers. Transaction fee should be explicitly defined in [MsgRequestData](ProtocolMessages#msgrequestdata) of a request. When a request comes, request-executing validators must decide if they want to execute it. After that, a random validator is chosen from the willing request-executing validators. The chosen validator will execute the oracle script and create MsgResultReport in the end. The validator must clarify the fee paid to AI-API providers, test-case providers, and block-creating validators in the MsgResultReport.

If there are more than one validator asked in the MsgRequestData (AskCount), the transaction fee is divided equally for each validator. The request-executing validators must decide if they accept such transaction fee.

### How ORAI token is mined
The ORAI token is rewarded for each newly created block.
#### ERC20 ORAI token and ORAI token (native)
There is a mechanism to synchronize ORAI tokens on the Oraichain network and ERC20 ORAI tokens on the Ethereum network.

### Incentives for block-creating validators and stakers

#### Token reward
There are a limited number of ORAI tokens, so token reward must be reduced after a number of blocks.

#### Inflation and staking
In order to keep the value of ORAI token, holders must stake their token to the Oraichain network. The rewarding token is divided based on the number of tokens that a holder is staking to a validator.

#### Slashing
This is a mechanism to punish bad behavior of validators in aspects of AI API quality, response time, and availability.
