---
id: become-a-validator
title: Become a Validator
---

## Step by step guide to participate in Oraichain as a full node:

1. It is necessary to [install Oraichain](https://docs.orai.io/docs/developers/oraichainInstallation) before going further.

   ```bash
   cd orai-starterkit && docker-compose up -d
   ```

1. Init with a local account to interact with the network:

   ```bash
   fn init --chain-id=Oraichain --user=duc
   fn websocketInit
   ```

1. Run the full node:

   ```bash
   fn oraid
   # Start your websocket to include a reporter to report back to Oraichain
   fn websocketRun
   # start rest server
   fn restServer
   ```

1. Create a new validator for your full node to receive ORAI tokens when committing a block:

   ```bash
   fn createValidator --amount 10000orai --pubkey oraivalconspub1addwnpepqvydmv22mkzc9rc92g43unew08cmj4q46dhk7vz0a9fj2xjsjn2lvqj0dfr --moniker ducphamle --chain-id Oraichain --commission-rate 0.10 --commission-max-rate 0.20 --commission-max-change-rate 0.01
   ```

1. Happy validating !!

#### Note:

If Oraichain is still in the genesis phase, you can submit your genesis transaction to be a genesis validator as well as genesis account. How to do:

    ```
    oraid add-genesis-account $(oraicli keys show <acc-name> -a) 10000000000000orai
    oraid gentx --amount 100000000orai --name duc --keyring-backend test --min-self-delegation 100
    ```

put the validators into the genesis file so the chain is aware of the validators
`oraid collect-gentxs`
