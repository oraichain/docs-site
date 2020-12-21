---
id: Terminology
title: Terminology
---

## AI Provider

<!-- AI Provider là tác nhân cung cấp AI Data Source cho hệ thống Oraichain. AI Provider sẽ nhận được incentive khi có yêu cầu sử dụng AI Data Source do họ cung cấp theo một tỷ lệ được định nghĩa trong message `MsgCreateAIDataSource`. Trong hệ thống Oraichain bất kỳ ai cũng có thể trở thành AI Provider. -->

AI Provider is an actor that provides AI Data Sources for the Oraichain system. The provider will receive incentives when there is a request to his provided AI Data Source. The incentive rate is explicitly defined in the message `MsgCreateAIDataSource`. In the Oraichain system, anyone could become an AI Provider.

## AI Data Source

<!-- AI Data Source là thành phần cơ bản trong hệ thống Oraichain. Nó miêu tả cách có thể lấy dữ liệu từ các AI model. Trong Oraichain, AI Data Source có thể được đăng ký bởi AI Provider. Việc đăng ký được thực hiện thông qua gửi `MsgCreateAIDataSource` tới hệ thống. Trong thông điệp đăng ký AI Data Source, AI Provider sẽ đặc tả một số tham số của AI Data Source gồm:

- the owner người sẽ tạo ra AI Provider và cũng chính là người sẽ được nhận incentive từ việc người khác sử dụng AI data source
- the name: Tên của ai data source  giúp gợi nhớ.
- Phí giao dịch mà người yêu cầu cần trả cho việc yêu cầu dữ liệu.
- mã thực thi: đoạn mã thực thi mà sẽ được thực hiện bởi validator khi nhận được yêu cầu tới data source đó

Dựa vào message để tạo ai data source ta có thể thấy rõ chủ sở hữu của data source. đó sẽ là người có thể thực hiện các cập nhật liên quan đến data source đó. Người này cũng sẽ là người được nhận được thưởng từ việc những người khác sử dụng ai data source đó. -->

AI Data Source is a basic element in the Oraichain network. It describes a way to provide an AI model for users. An AI Provider can create and register different AI Data Sources in the Oraichain using the message `MsgCreateAIDataSource` sent to the system. The AI Data Source metadata will be stored on Oraichain for transparency and for everyone to see using the `AIDataSource` struct. There are some parameters given in the message as follows:

- The owner of the AI Data Source, which is also the one that receives incentives. Moreover, the owner can edit the information related to his data sources.
- Name of the data source.
- The transaction fee when requesting data from the AI model.
- The source code of the data source that will be executed by the validators.
- The overall description of the data source.

If you notice, the source code of the data source is only stored off-chain, because its size can be large. We should only keep the stored data small only to minimize the gas fee and execution time for the nodes.

## Testcase Provider

<!-- Testcase Provider là tác nhân cung cấp AI testcase cho hệ thống Oraichain. Testcase Provider sẽ nhận được incentive khi có yêu cầu sử dụng testcase do họ cung cấp theo một tỷ lệ được định nghĩa trong message `MsgCreateTestcase`. Trong hệ thống Oraichain bất kỳ ai cũng có thể trở thành testcase provider. -->

Testcase Provider is an actor that provides AI test cases for the Oraichain system. The Provider receives incentives when having a request to his test cases, and the reward rate is defined in the message `MsgCreateTestcase`. Similar to the AI Provider, anyone can be a test case provider.

## AI Testcase

<!-- AI testcase là một trong các thành phần cơ bản trong hệ thống Oraichain. Nó bao gồm một tập các dữ liệu input và output đã được mã hoá để đảm bảo quyền riêng tư. Các tập input và output này sẽ được các Oracle Script chỉ định để thực hiện kiểm tra độ tin cậy  của AI data source trước khi thực hiện yêu cầu. Việc đăng ký được thực hiện thông qua gửi `MsgCreateAITestCase` tới hệ thống. Trong thông điệp đăng ký AI testcase, testcase provider sẽ đặc tả một số tham số của testcase gồm:

- the owner người sẽ tạo ra testcase và cũng chính là người sẽ được nhận incentive từ việc người khác sử dụng AI data source
- the name: Tên của testcase  giúp gợi nhớ.
- Phí giao dịch mà người yêu cầu cần trả cho việc sử dụng testcase.
- tập dữ liệu: tập input và output đã được mã hoá.

Cũng giống như ai data source, ai test case cũng được sở hữu bởi một người và người đó có quyền cập nhật testcase cũng như nhận thưởng từ việc người khác sử dụng testcase. -->

AI test case is one of the most fundamental elements in the Oraichain system. It consists of a set of inputs and outputs encrypted for privacy purposes. This set is indicated by Oracle Scripts to examine the credibility of the AI Data Sources before actually executing the request. In order to register for an AI test case, the test case provider needs to specify some parameters in the `MsgCreateTestCase`:

- The owner of the AI Test Case, which is also the one that receives incentives. Moreover, the owner can edit the information related to his test cases.
- Name of the test case.
- The transaction fee when executing the test case.
- The source code of the test case that will be run by the validators.
- The overall description of the test case.

The Test Case metadata will be stored on Oraichain for transparency and for everyone to see using the `TestCase` struct. Below are the attributes of a test case that are stored on-chain:

- The owner of the Test Case, which is also the one that receives incentives. Moreover, the owner can edit the information related to his test cases.
- Name of the test case.
- The transaction fee when executing the test case.
- Description: The overall description of the test case.

If you notice, the source code of the test case is only stored off-chain, because its size can be large. We should only keep the stored data small only to minimize the gas fee and execution time for the nodes.

## Oracle Script

<!-- Khi một ai đó yêu cầu dữ liệu từ Oraichain's oracle, họ gọi đến một trong các Oracle Script có sẵn trên Oraichain. Một Oracle Script là một đoạn chương trình sẽ gọi đến các nguồn dữ liệu khác để lấy dữ liệu thô về sau đó thực hiện các testcase do người request gửi tới tương ứng với các nguồn dữ liệu đó. Nếu nguồn dữ liệu nào thoả mãn sẽ được chuyển sang phase 2 là tổng hợp các dữ liệu đó và trả về cho người yêu cầu. Sau đó thông tin về dữ liệu đó sẽ được lưu trữ trên Oraichain để có thể sử dụng và xác thực sau này. Nguồn dữ liệu nói đến ở đây có thể là các AI Dato Source hoặc là các Oracle Script khác. -->

When an individual requests data from the Oraichain's oracle, he calls one of the existing Oracle Scripts on Oraichain. An Oracle Script is a file which will collect data from different AI Data Sources or Oracle Scripts before using test cases given by the user to test those data. If they satisfy the requirements of the test cases, the script will trigger an aggregation phase, and then the aggregated data is stored on the Oraichain for future usage and verification.

To create an oracle script, the creator must broadcast a `MsgCreateOracleScript` to Oraichain. The contents of the message includes:

- The owner of the oracle script.
- The name of the oracle script.
- The schema detailing the inputs and outputs of this oracle script, as well as the corresponding types.
- The URL for the source code of this oracle script.

The following attributes of an oracle script are stored on Oraichain:

- Name of the oracle script.
- Owner of the oracle script.
- Overall description of the oracle script.
- Minimum fees required to run this oracle script. This fee is calculated based on the fees provided by the data sources and the test cases.
- The list of data sources that this oracle script executes.
- The list of test cases that this oracle executes.

## AI Request
An user can create a new `AIrequest` to Oraichain to use a provided AI service. Oraichain stores basic information of an AI request for querying, and other systems can use the request's result for their business logic. Behind the scenes, users invoke an oracle script call, where the system chooses randomly a set of validators that execute the oracle script and collect the results. The results are stored on Oraichain for other users or system to re-use in the future. Note that users can specify the number of validators that they want to run the script. Below are the required attributes for an `AIrequest`:

- Request ID that identifies uniquely the request.
- Name of the oracle script that the user wants to execute.
- The creator of this AI request, which is the user.
- The list of validators that run the oracle script.
- The block height that this AI request transaction is added.
- AI Data Sources and Test Cases used in this AI request.
- Fees that the user spends for this AI request.
- User's input for the test case.
- User's expected output for the test case.

These attributes after stored on-chain will not be modified for the sake of reusability and immutability.


## Validator

<!-- Validator là tác nhân tham gia vào hệ thống oraichain, thực hiện việc đóng block và validator dữ liệu từ các AI provider. Validator sẽ là người thực hiện việc chạy các testcase kiếm tra tính chính xác của testcase. Nếu testcase thoả mãn điều kiện trong oracle script  thì validator sẽ thực hiện tổng hợp dữ liệu từ ai data source. Validator sẽ nhận được phần thưởng chi việc chaỵ testcase và data source. Ngoài ra validator sẽ phải chịu tránh nghiêmk cho dữ liệu đã được họ thu thập và validator từ người dùng. Do dó để trở thành validator sẽ cần stake một lượng ORAI để đảm bảo độ tin cậy. -->

Validator is an actor that participates in the Oraichain system, which is responsible for committing blocks and executing test cases to validate data from different data sources. If the test cases satisfy the conditions stated in the oracle script, the validator will aggregate data from such data sources. As a result, the validators receive rewards which are ORAI tokens by doing so, and by committing new blocks. Becoming a validator requires a decent amount of ORAI tokens staked to guarantee reliability

Validator is not much different from a full node. Nevertheless, in order to execute AI requests, a validator needs a separate process that runs in the background. That process is responsible for executing requests based on the events it receives from its node. After executing, it must send a new transaction onto Oraichain as proof, which is called a `Report`. A report has the following fields:

- ID of the AI request.
- Results of the data sources. This is proof for a validator that it has run the oracle script.
- Results of the test cases.
- The block height when the validator adds this report on-chain.
- The aggregated result of the oracle script.

Note that Oraichain uses reports from the validators to provide incentives for all participants. As a result, each validator must behave in an honest manner to earn trust within the community.

## AI Result & Reward

After collecting enough reports from the validators, an `AIRequestResult` stores the final result after aggregating the results from the reports of an AI request, which are immutable and can be reused. It contains:

- The ID of the request to identify which this `AIRequestResult` belongs to.
- The list of resutls from different validators.
- Status of this `AIRequestResult`. It can be in pending, finished, or expired mode. It is in pending mode when there are not enough reports, but the deadline is not reached. An `AIRequestResult` deadline counts as a threshold for a specific number of blocks passed from the block that has added the create AI request transaction. For example, an AI request is added into block ten, and the threshold is ten. As a result, the deadline is block twenty. If the `AIRequestResult` receives less than the number of required reports, it will be considered as expired. Other than that, the `AIRequestResult` is in finish mode.

Oraichain also stores a `Reward` struct to incentive entities that have contributed in the process. Even when an `AIRequestResult` is in expired mode, those who have reported or data sources, test cases that have run successfully and correctly will be rewarded. In order to do so, there are a few parameters for this `Reward` struct that we need to consider:

- The list of validators that successfully report back to the system.
- The list of data sources that have run and produced quality results. Quality here means they passed the test cases.
- The list of test cases that have run successfully.
- The block height of this reward. Each block only has at most one `Reward` stored on chain.
- Total voting power of the validators and their fees to incentive them properly.
- Provider fees required by each data source and test case provider so we can reward them.