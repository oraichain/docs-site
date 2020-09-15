---
id: ProtocolMessages
title: Protocol Messages
---

## Cosmos SDK Messages
Since the Oraichain blockchain is built from the Cosmos network, it also supports all message types of Cosmos SDK.

## Oraichain Messages
In order to support validators running oracle scripts, AI Data Source, and AI Testcase, there are other message types implemented on Oraichain as follows:

### Oraichain Specific Messages

Apart from the messages that stems from the Cosmos SDK, Oraichain also supports a number of messages native to its a ai data oracle system. These messages' specification is presented below.

#### MsgCreateAIDataSource

Deploys and registers a new ai data source to Oraichain. Once registered, the data source is assigned a data source prefix with its unique name as an identifier which can be used to refer to it forever.

Parameter | Type | Description
---------|----------|---------
 Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the ai data source
 Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this data source
<!-- Source Code URL | `string` | The URL for the source code of this data source -->
Code | `[]byte` | The source code in bytes of this data source
Fees | `string` | The transaction fee required to run this data source. Eg: 5000orai

### MsgEditAIDataSource

Edits an existing data source given the unique identifier

Parameter | Type | Description
---------|----------|---------
OldName | `string` | The current unique identifier that the data source has
NewName | `string` | The new unique identifier and also the new name that the data source is assigned to. If it is identical to the OldName, then the identifier is unchanged.
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the ai data source
Description | `string` | The description of this data source
Code | `[]byte` | The source code in bytes of this data source
Fees | `string` | The transaction fee required to run this data source. Eg: 5000orai

### QueryResDataSource

When querying, the user only needs to type the name of the data source, and the system will return three attributes below in JSON format.

Parameter | Type | Description
---------|----------|---------
Name | `string` | The human-readable string name for this data source
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the ai data source
Code | `string` | The source code in string of this data source

### MsgCreateOracleScript

Deploys a new oracle script to Oraichain's network. Once registered, the script is assigned a unique oracle script prefix + name identifier which can be used to refer to it forever.

Parameter | Type | Description
---------|----------|---------
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the Oracle Script
Name | `string` | The human-readable string name for this data source
Description | `string` | The description of this oracle script
<!-- Schema | `string` | The schema detailing the inputs and outputs of this oracle script, as well as the corresponding types
Source Code URL	| `string`| The URL for the source code of this oracle script -->
Code | `[]byte` | The source code in bytes of this oracle script

### MsgEditOracleScript

Edits an existing oracle script given the unique identifier which is the name. The sender must be the owner of the oracle script for the transaction to succeed.

Parameter | Type | Description
---------|----------|---------
OldName | `string` | The current unique identifier that the oracle script has
NewName | `string` | The new unique identifier and also the new name that the oracle script is assigned to. If it is identical to the OldName, then the identifier is unchanged.
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the Oracle Script
Description | `string` | The description of this oracle script
<!-- Schema | `string` | The schema detailing the inputs and outputs of this oracle script, as well as the corresponding types
Source Code URL	| `string`| The URL for the source code of this testcase. -->
Code | `[]byte` | The source code in bytes of this oracle script

### QueryResOracleScript

When querying, the user only needs to type the name of the oracle script, and the system will return three attributes below in JSON format.

Parameter | Type | Description
---------|----------|---------
Name | `string` | The human-readable string name for this oracle script
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the oracle script
Code | `string` | The source code in string of this oracle script

### MsgCreateTestCase

Parameter | Type | Description
---------|----------|---------
 Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the test case
 Name | `string` | The human-readable string name for this test case
Description | `string` | The description of this test case
<!-- Source Code URL | `string` | The URL for the source code of this data source -->
Code | `[]byte` | The source code in bytes of this test case
Fees | `string` | The transaction fee required to run this test case. Eg: 5000orai

### MsgEditTestCase

Parameter | Type | Description
---------|----------|---------
OldName | `string` | The current unique identifier that the test case has
NewName | `string` | The new unique identifier and also the new name that the test case is assigned to. If it is identical to the OldName, then the identifier is unchanged.
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the ai test case
Description | `string` | The description of this test case
Code | `[]byte` | The source code in bytes of this test case
Fees | `string` | The transaction fee required to run this test case. Eg: 5000orai

<!-- Ví dụ schema: 
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
``` -->

<!-- ### MsgExcuteTestCase

Parameter | Type | Description
---------|----------|---------
TestcaseId	| `int64` | he unique identifier number assigned to the testcase when it was first registered on Oraichain
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the testcase
Calldata | `string` | The data passed over to the the testcase for the script to use during its execution
AskCount | `int64` | The number of validators that are requested to respond to this request
MinCount | `int64` | The minimum number of validators necessary for the request to proceed to the execution phase
RequestID | `string` | the unique identifier of this  request, as specified by the client. This same unique ID will be sent back to the requester with the  response. -->

### QueryResTestCase

When querying, the user only needs to type the name of the data source, and the system will return three attributes below in JSON format.

Parameter | Type | Description
---------|----------|---------
Name | `string` | The human-readable string name for this test case
Owner | `sdk.AccAddress` | The address of the entity who will be responsible for maintaining the test case
Code | `string` | The source code in string of this test case

### MsgSetAIRequest

Requests a new data based on an existing oracle script. A data request will be assigned a unique identifier with an AI request prefix once the transaction is confirmed. After sufficient validators report successfully. The results of the data requests will be written and stored permanently on Oraichain for future uses.

<!-- Parameter | Type | Description
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
``` -->

Parameter | Type | Description
---------|----------|---------
RequestID | `string` | the unique identifier of this oracle request, as specified by the client. This same unique ID will be sent back to the requester with the oracle response. This field is filled automatically, so the user does not need to care about this.
ContractName | `string` | The unique name identifier of the oracle script.
Creator | `sdk.AccAddress` | The address of the message's sender or creator of this request.
ImageHash | `string` | The image hash stored on IPFS. Each validator will collect the actual image using this hash to send to the AI data sources.
ImageName | `string` | The image name to send to the AI data sources.
<!-- AskCount | `int64` | The number of validators that are requested to respond to this request
MinCount | `int64` | The minimum number of validators necessary for the request to proceed to the execution phase -->
ValidatorCount | `int64` | The number of validators that are needed to execute the request. The current default value is 1 for testing.
Fees | `string` | The transaction fee required to run this test case. Eg: 5000orai

### QueryResAIRequest

When querying, the user only needs to type the id of the AI request, and the system will return a few attributes below in JSON format.

Parameter | Type | Description
---------|----------|---------
RequestID | `string` | the unique identifier of this oracle request, as specified by the client. This same unique ID will be sent back to the requester with the oracle response. This field is filled automatically, so the user does not need to care about this.
ContractName | `string` | The unique name identifier of the oracle script.
Creator | `sdk.AccAddress` | The address of the message's sender or creator of this request.
Validators | `[]sdk.ValAddress` | The list validator addresses that participate in the request.
BlockHeight | `int64` | The block height that contains the transaction creating the AI request.
<!-- AskCount | `int64` | The number of validators that are requested to respond to this request
MinCount | `int64` | The minimum number of validators necessary for the request to proceed to the execution phase -->
DataSources | `[]DataSource` | The list of data sources that will be called.
TestCases | `[]TestCase` | The list of test cases that will be called.
Fees | `string` | The transaction fee required to run this request. Eg: 20000orai

### QueryResFullRequest

When querying, the user only needs to type the id of the AI request, and the system will return a few attributes below in JSON format.

Parameter | Type | Description
---------|----------|---------
AIRequest | `AIRequest` | The AIRequest object that is stored on Oraichain which shows all the information about an AI request.
Reports | `[]Report` | The list of reports created by the validators after executing the test cases and data sources.
