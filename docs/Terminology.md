---
id: Terminology
title: Terminology
---

## Terminology

### AI Provider

AI Provider là tác nhân tham gia vào hệ thống để cung cấp AI Data Source. AI Provider sẽ nhận được incentive khi có yêu cầu sử dụng AI Data Source do họ cung cấp theo một tỷ lệ được định nghĩa trong message `MsgCreateAIDataSource`

### AI Data Source

AI Data Source là thành phần cơ bản trong hệ thống Oraichain. Nó miêu tả cách có thể lấy dữ liệu từ các AI model. Trong Oraichain, AI Data Source có thể được đăng ký bởi AI Provider. Việc đăng ký được thực hiện thông qua gửi `MsgCreateAIDataSource` tới hệ thống. Trong thông điệp đăng ký AI Data Source, AI Provider sẽ đặc tả một số tham số của AI Data Source gồm:

- the owner who wish to create the data source và là người mà sẽ nhận incentive khi có yêu cầu gọi đến AI Data Source
- the name of the  AI data source
- Phí giao dịch mà người yêu cầu cần trả cho việc yêu cầu dữ liệu.
- the content of the executable to be run by block validators upon receiving a data request for this data source


Cần viết lại theo văn của mình
```
When registering the data source, the message sender can choose whether to specify an AI provider of the source. If an AI provider is specified, only the AI provider can make any changes to the data source once it is registered. They will also be the only party able to collect the accumulated request fees. On the other hand, if an AI provider is omitted, the data source can no longer be edited after it is registered. Note that the sender who creates the data source and the AI provider of the data source does not need to be the same.
```

### Testcase Provider

### Oracle Script

Khi một ai đó yêu cầu dữ liệu từ Oraichain's oracle, họ gọi đến một trong các Oracle Script có sẵn trên Oraichain.  Một Oracle Script là một đoạn chương trình sẽ gọi đến các nguồn dữ liệu khác để lấy dữ liệu thô về sau đó thực hiện các testcase do người request gửi tới tương ứng với các nguồn dữ liệu đó. Nếu nguồn dữ liệu nào thoả mãn sẽ được chuyển sang phase 2 là tổng hợp các dữ liệu đó và trả về cho người yêu cầu. Sau đó thông tin về dữ liệu đó sẽ được lưu trữ trên Oraichain để có thể sử dụng và xác thực sau này. Nguồn dữ liệu nói đến ở đây có thể là các AI Dato Source hoặc là các Oracle Script khác.

To create an oracle script, the creator must broadcast a `MsgCreateOracleScript` to Oraichain. The contents of the message includes:

- the owner of the oracle script
- the name of the oracle script
- the schema detailing the inputs and outputs of this oracle script, as well as the corresponding types
- the URL for the source code of this oracle script


Similar to data sources, the sender who wishes to create the oracle script does not have to be the same as the owner of the oracle script specified in the message.

The execution flow of an oracle script can be broken down into two phases. In the first phase, the script outlines the data sources that are required for its execution. It then sends out a request to the chain's validators to retrieve the result from the required data sources and then executes testcase from request user. The contents of this consists of the data sources' execution steps and the associated parameters.

The second phase then aggregates all of the data reports returned by the validators, with each report containing the values the validator received from the required data sources. The script then proceeds to combine those values into a single final result


### Validator

Thực hiện đóng block và validator dữ liệu từ các AI provoder. Validator sẽ chịu tránh nghiệm cho dữ liệu được họ cung cấp. Họ sẽ thực hiện nhiệm vụ chạy testcase được cung cấp bởi người dùng và nhận incentive.
