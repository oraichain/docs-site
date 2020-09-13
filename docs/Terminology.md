---
id: Terminology
title: Terminology
---

## Terminology

### AI Provider

AI Provider là tác nhân cung cấp AI Data Source cho hệ thống Oraichain. AI Provider sẽ nhận được incentive khi có yêu cầu sử dụng AI Data Source do họ cung cấp theo một tỷ lệ được định nghĩa trong message `MsgCreateAIDataSource`. Trong hệ thống Oraichain bất kỳ ai cũng có thể trở thành AI Provider.

### AI Data Source

AI Data Source là thành phần cơ bản trong hệ thống Oraichain. Nó miêu tả cách có thể lấy dữ liệu từ các AI model. Trong Oraichain, AI Data Source có thể được đăng ký bởi AI Provider. Việc đăng ký được thực hiện thông qua gửi `MsgCreateAIDataSource` tới hệ thống. Trong thông điệp đăng ký AI Data Source, AI Provider sẽ đặc tả một số tham số của AI Data Source gồm:

- the owner người sẽ tạo ra AI Provider và cũng chính là người sẽ được nhận incentive từ việc người khác sử dụng AI data source
- the name: Tên của ai data source  giúp gợi nhớ.
- Phí giao dịch mà người yêu cầu cần trả cho việc yêu cầu dữ liệu.
- mã thực thi: đoạn mã thực thi mà sẽ được thực hiện bởi validator khi nhận được yêu cầu tới data source đó

Dựa vào message để tạo ai data source ta có thể thấy rõ chủ sở hữu của data source. đó sẽ là người có thể thực hiện các cập nhật liên quan đến data source đó. Người này cũng sẽ là người được nhận được thưởng từ việc những người khác sử dụng ai data source đó.

### Testcase Provider

Testcase Provider là tác nhân cung cấp AI testcase cho hệ thống Oraichain. Testcase Provider sẽ nhận được incentive khi có yêu cầu sử dụng testcase do họ cung cấp theo một tỷ lệ được định nghĩa trong message `MsgCreateAITestcase`. Trong hệ thống Oraichain bất kỳ ai cũng có thể trở thành testcase provider.

### AI testcase

AI testcase là một trong các thành phần cơ bản trong hệ thống Oraichain. Nó bao gồm một tập các dữ liệu input và output đã được mã hoá để đảm bảo quyền riêng tư. Các tập input và output này sẽ được các Oracle Script chỉ định để thực hiện kiểm tra độ tin cậy  của AI data source trước khi thực hiện yêu cầu. Việc đăng ký được thực hiện thông qua gửi `MsgCreateAITestCase` tới hệ thống. Trong thông điệp đăng ký AI testcase, testcase provider sẽ đặc tả một số tham số của testcase gồm:

- the owner người sẽ tạo ra testcase và cũng chính là người sẽ được nhận incentive từ việc người khác sử dụng AI data source
- the name: Tên của testcase  giúp gợi nhớ.
- Phí giao dịch mà người yêu cầu cần trả cho việc sử dụng testcase.
- tập dữ liệu: tập input và output đã được mã hoá.
  
Cũng giống như ai data source, ai test case cũng được sở hữu bởi một người và người đó có quyền cập nhật testcase cũng như nhận thưởng từ việc người khác sử dụng testcase.

### Oracle Script

Khi một ai đó yêu cầu dữ liệu từ Oraichain's oracle, họ gọi đến một trong các Oracle Script có sẵn trên Oraichain.  Một Oracle Script là một đoạn chương trình sẽ gọi đến các nguồn dữ liệu khác để lấy dữ liệu thô về sau đó thực hiện các testcase do người request gửi tới tương ứng với các nguồn dữ liệu đó. Nếu nguồn dữ liệu nào thoả mãn sẽ được chuyển sang phase 2 là tổng hợp các dữ liệu đó và trả về cho người yêu cầu. Sau đó thông tin về dữ liệu đó sẽ được lưu trữ trên Oraichain để có thể sử dụng và xác thực sau này. Nguồn dữ liệu nói đến ở đây có thể là các AI Dato Source hoặc là các Oracle Script khác.

To create an oracle script, the creator must broadcast a `MsgCreateOracleScript` to Oraichain. The contents of the message includes:

- the owner of the oracle script
- the name of the oracle script
- the schema detailing the inputs and outputs of this oracle script, as well as the corresponding types
- the URL for the source code of this oracle script


### Validator

Validator là tác nhân tham gia vào hệ thống oraichain, thực hiện việc đóng block và validator dữ liệu từ các AI provider. Validator sẽ là người thực hiện việc chạy các testcase kiếm tra tính chính xác của testcase. Nếu testcase thoả mãn điều kiện trong oracle script  thì validator sẽ thực hiện tổng hợp dữ liệu từ ai data source. Validator sẽ nhận được phần thưởng chi việc chaỵ testcase và data source. Ngoài ra validator sẽ phải chịu tránh nghiêmk cho dữ liệu đã được họ thu thập và validator từ người dùng. Do dó để trở thành validator sẽ cần stake một lượng ORAI để đảm bảo độ tin cậy.
