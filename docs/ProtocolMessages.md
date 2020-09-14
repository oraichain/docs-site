---
id: ProtocolMessages
title: Protocol Messages
---

## Native Cosmos SDK Messages
Stemming from its Cosmos SDK foundation, Oraichain supports all types of messages that are native to the SDK.

## Oraichain Specific Messages

Apart from the messages that stems from the Cosmos SDK, Oraichain also supports a number of messages native to its a ai data oracle system. These messages' specification is presented below.

### MsgCreateAIDataSource

Deploying and registering a new AI data source to Oraichain. Once registered, the data source is assigned a unique `int64` identifier which can be used to refer to it forever.

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

Deploying a new oracle script to Oraichain's network. Once registered, the script is assigned a unique `int64` identifier which can be used to refer to it forever.

Parameter | Type | Description
---------|----------|---------
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the Oracle Script
Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this data source
Schema | `string` | The schema detailing the inputs and outputs of this oracle script, as well as the corresponding types
Source Code URL	| `string`| The URL for the source code of this oracle script

### MsgEditOracleScript

Editing an existing oracle script given the unique `int64` identifier (i.e. oracleScriptID). The sender must be the owner of the oracle script for the transaction to succeed.

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

Ví dụ schema:
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

Requests a new data based on an existing oracle script. A data request will be assigned a unique identifier once the transaction is confirmed. After sufficient validators report the raw data points. The results of the data requests will be written and stored permanently on Oraichain for future uses.

Parameter | Type | Description
---------|----------|---------
OracleScriptID	| `int64` | The unique identifier number assigned to the oracle script when it was first registered on Oraichain
Sender | `sdk.AccAddress` | The address of the message's sender.
Requestdata | `string` | The data passed over to the oracle script for the script to use during its execution
AskCount | `int64` | The number of validators that are requested to respond to this request
MinCount | `int64` | The minimum number of validators necessary for the request to proceed to the execution phase
RequestID | `string` | the unique identifier of this oracle request, as specified by the client. This same unique ID will be sent back to the requester with the oracle response.
fee | `int64` | transaction fee

Ví dụ Requestdata:
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
