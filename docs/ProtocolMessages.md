---
id: ProtocolMessages
title: Protocol Messages
---

## Cosmos SDK Messages
Since the Oraichain blockchain is built from the Cosmos network, it also supports all message types of Cosmos SDK.

## Oraichain Messages
In order to support validators running oracle scripts, AI Data Source, and AI Testcase, there are other message types implemented on Oraichain as follows:

### MsgCreateAIDataSource
This message is used to create a new AI data source to Oraichain.
Each data source will have a unique identifier (`int64`) that can be referenced from oracle scripts.

Parameter | Type | Description
---------|----------|---------
 Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the ai data source
 Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this data source
Source Code URL | `string` | The URL for the source code of this data source

### MsgEditAIDataSource

Editing an existing data source given the unique `int64` identifier (i.e. dataSourceID).

Parameter | Type | Description
---------|----------|---------
DataSourceID | `int64` | The unique identifier number assigned to the data source when it was first registered
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the ai data source
Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this data source
Source Code URL | `string` | The URL for the source code of this data source

### MsgGetDataSource


Parameter | Type | Description
---------|----------|---------
DataSourceID | `int64` | The unique identifier number assigned to the data source when it was first registered
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the ai data source
Name | `string` | The human-readable string name for this data source

### MsgCreateOracleScript
This message is used to create a new oracle script to the Oraichain network.
Each oracle script will have a unique identifier (`int64`) that can be referenced from users' requests.

Parameter | Type | Description
---------|----------|---------
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the Oracle Script
Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this data source
Schema | `string` | The schema detailing the inputs and outputs of this oracle script, as well as the corresponding types
Source Code URL	| `string`| The URL for the source code of this oracle script

### MsgEditOracleScript

Editing an existing oracle script given the unique `int64` identifier (i.e. oracleScriptID).
In order to edit the oracle script, the sender must be the owner.

Parameter | Type | Description
---------|----------|---------
OracleScriptID	| `int64` | The unique identifier number assigned to the oracle script when it was first registered on Oraichain
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the Oracle Script
Name | `string` | The human-readable string name for this oracle script
Description | `string` | The description of this oracle script
Schema | `string` | The schema detailing the inputs and outputs of this oracle script, as well as the corresponding types
Source Code URL	| `string`| The URL for the source code of this testcase.

### MsgGetOracleScript


Parameter | Type | Description
---------|----------|---------
OracleScriptID | `int64` | The unique identifier number assigned to the oracle script when it was first registered
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the oracle script
Name | `string` | The human-readable string name for this oracle script

### MsgCreateTestCase

Parameter | Type | Description
---------|----------|---------
TestcaseId	| `int64` | The unique identifier number assigned to the testcase when it was first registered on Oraichain
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the test case
Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this data source
Schema | `string` | The schema detailing the inputs and outputs of this testcase, as well as the corresponding types
Source URL	| `string`| The URL for the source code of this testcase.

### MsgEditTestCase

Parameter | Type | Description
---------|----------|---------
TestcaseId	| `int64` | The unique identifier number assigned to the testcase when it was first registered on Oraichain
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the test case
Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this data source
Schema | `string` | The schema detailing the inputs and outputs of this testcase, as well as the corresponding types
Source URL	| `string`| The URL for the source code of this oracle script

Schema example:
```json
{
    "inputs":{
        "image": {
            "type": "string",
            "title": "The image url",
            "default": "",
            "examples": [
                "https://gateway.datochain.com/ipfs/QmdXBX8KJw3nkXgJe1NFrSGckWETnREdVQPS94BBkogKE7"
            ]
        },
    },
    "outputs":{
       "name": {
            "type": "string",
            "title": "name",
            "default": "",
            "examples": [
                "Cris"
            ]
        },
        "age": {
            "type": "int64",
            "title": "age",
            "default": "",
            "examples": [
                12
            ]
        },
    }
}
```

### MsgExcuteTestCase

Parameter | Type | Description
---------|----------|---------
TestcaseId	| `int64` | he unique identifier number assigned to the testcase when it was first registered on Oraichain
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the testcase
Calldata | `string` | The data passed over to the the testcase for the script to use during its execution
AskCount | `int64` | The number of validators that are requested to respond to this request
MinCount | `int64` | The minimum number of validators necessary for the request to proceed to the execution phase
RequestID | `string` | the unique identifier of this  request, as specified by the client. This same unique ID will be sent back to the requester with the  response.

### MsgGetTestCase


Parameter | Type | Description
---------|----------|---------
TestcaseId | `int64` | The unique identifier number assigned to the the testcase when it was first registered
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the the testcase
Name | `string` | The human-readable string name for this the testcase

### MsgRequestData
Users or smart contracts are based on existing oracle scripts in order to create new requests to the Oraichain network. Each request will have a unique identifier. After validators return results, they are written permanently to Oraichain.

Parameter | Type | Description
---------|----------|---------
OracleScriptID	| `int64` | The unique identifier number assigned to the oracle script when it was first registered on Oraichain
Sender | `sdk.AccAddress` | The address of the message's sender.
Requestdata | `string` | The data passed over to the oracle script for the script to use during its execution
AskCount | `int64` | The number of validators that are requested to respond to this request
MinCount | `int64` | The minimum number of validators necessary for the request to proceed to the execution phase
RequestID | `string` | the unique identifier of this oracle request, as specified by the client. This same unique ID will be sent back to the requester with the oracle response.
fee | `int64` | transaction fee

Requestdata example:
```json
{
    "testcase":[
        {
            "inputs":{
                "image": "https://gateway.datochain.com/ipfs/QmdXBX8KJw3nkXgJe1NFrSGckWETnREdVQPS94BBkogKE7"
            },
            "expectedOutput":{
                "name":"Cris",
                "age":22
            }
        },
        {
            "inputs":{
                "image": "https://gateway.datochain.com/ipfs/QmdXBX8KJw3nkXgJe1NFrSGckWETnREdVQPS94BBkogKE7"
            },
            "expectedOutput":{
                "name":"Cris",
                "age":22
            }
        }
    ],
    "data":{
            "inputs":{
                "image": "https://gateway.datochain.com/ipfs/QmdXBX8KJw3nkXgJe1NFrSGckWETnREdVQPS94BBkogKE7"
            },
            "expectedOutput":{
                "name":"Cris",
                "age":22
            }
        }
}
```
