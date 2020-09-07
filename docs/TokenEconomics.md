---
id: TokenEconomics
title: Token Economics
---

When we call **ORAI**, it means that it is native ORAI tokens created and contained in the Oraichain network. At the beginning, we are basing on ERC20 to issue ORAI token on the Ethereum network that we call **ERC20-ORAI**.

## Key metrics
| Token Name                 | ORAI                          |
|----------------------------|-------------------------------|
| Token Type                 | ERC-20 (and native after mainnet launch)                      |
|Seed Sale|
| Amount Raised Seed Sale    | $70,000                       |
| Seed Sale Token Price      | Each 8,600 ERC20-ORAI = $700             |
| Seed Sale Allocation       | 860,000 ERC20-ORAI (1.00%)           |
| Seed Sale Date             | 24th~30th September 2020      |
| Locked time                | 0.25% unlocked, 0.75% vesting over three months      |
|Private Sale||
| Amount Raised Private Sale | $1,000,000                    |
| Private Sale Token Price   | Each 1,000,000 ERC20-ORAI = $100,000         |
| Private Sale Allocation    | 10,000,000 ERC20-ORAI (11.63%)  |
| Private Sale Date          | November to December 2020     |
| Locked time                | Until mainnet launch      |
|LaunchPad||
| LaunchPad Allocation       | TBD                           |
| LaunchPad Sale Token Price | 11,180,000 ERC20-ORAI (13.00%)         |
| LaunchPad Sale Date        | 15th January 2021             |
| Initial Circulating Supply | 860,000 (1.00%)           |
| Total Token Supply         | 86,000,000 ERC20-ORAI               |

## ORAI token distribution (%)
**The token supply distribution is as follows:**
- Seed Sale Investors comprise 1.00% of the total token supply.
- Private Sale Investors comprise 11.63% of the total token supply.
- Public Sale Investors comprise 13.00% of the total token supply.
- Ecosystem comprises 30.00% of the total token supply.
- Team comprises 17.37% of the total token supply.
- Advisors comprise 7.00% of the total token supply.
- Foundation comprises 20.00% of the total token supply.

Figure here!

**BAND token release schedule (%)**

All team, advisors, and private sale investors' tokens are locked until mainnet launch.
Therefore, no founders, team members, advisors, or investors in the private sale round will be able to sell ERC20-ORAI tokens on any secondary market at the time of listing or any time prior to the mainnet launch.
We think it is very important to set up the incentives properly for our team and early supporters in the seed sale round.

Figure here!

## How ORAI token is used
The ORAI token is required in order to run an AI request sent to the Oraichain network. The token plays a role as transaction fee that is paid for request-executing validators, AI-API providers, test-case providers, and block-creating validators.

### Transaction fee
Transaction fee is different depending on fee requirement of request-executing validators, AI-API providers, and test-case providers. Transaction fee should be explicitly defined in [MsgRequestData](ProtocolMessages#msgrequestdata) of a request. When a request comes, request-executing validators must decide if they want to execute it. After that, a random validator is chosen from the willing request-executing validators. The chosen validator will execute the oracle script and create MsgResultReport in the end. The validator must clarify the fee paid to AI-API providers, test-case providers, and block-creating validators in the MsgResultReport.

If there are more than one validator asked in the MsgRequestData (AskCount), the transaction fee is divided equally for each validator. The request-executing validators must decide if they accept such transaction fee.

## How ORAI token is mined
The ORAI token is rewarded for each newly created block.
### ERC20 ORAI token and ORAI token (native)
There is a mechanism to synchronize ORAI tokens on the Oraichain network and ERC20 ORAI tokens on the Ethereum network.

## Incentives for block-creating validators and stakers

### Token reward
There are a limited number of ORAI tokens, so token reward must be reduced after a number of blocks.

### Inflation and staking
In order to keep the value of ORAI token, holders must stake their token to the Oraichain network. The rewarding token is divided based on the number of tokens that a holder is staking to a validator.

### Slashing
This is a mechanism to punish bad behavior of validators in aspects of AI API quality, response time, and availability.
