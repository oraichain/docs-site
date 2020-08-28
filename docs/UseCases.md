---
id: UseCases
title: Use Cases
---
Oraichain supports DApps in connecting AI to their smart contracts and traditional centralized applications in using AI API on the decentralized Oraichain marketplace.

## Connecting AI to smart contracts in DApps
AI will be the next big thing and upgrade of smart contracts in DApps. How to make smart contracts smarter with AI. We would like to introduce several use cases where smart contracts can leverage AI.

### Flexible smart contracts using face authentication
There are several scenarios in which face authentication is very useful as follows:
+ Using your face to get your balance instead of using a private key.
+ Withdraw using your face
+ Using your face in order to reset your private/public key pair.
+ Using both your private key and face in order to execute a smart contract.

![Flexible smart contracts using face authentication](./../static/img/face-authentication.png)
The sign-up flow is as follows:
+ Gửi ảnh đăng kí —> ORAI nhận ảnh + sinh ra một UID —> gọi AI Provider. —> ORAI ghi kết quả lên blockchain —> Callback tới ứng dụng
The sign-in flow is as follows:
+ Gửi ảnh đăng nhập —> ORAI nhận ảnh —> gọi AI Provider —> ORAI ghi kết quả UID lên blockchain —> Callback tới ứng dụng

### Smart contracts based on price prediction to buy or sell
For example, in Yearn.Finance (YFI), how we can decide to buy or sell.

### Smart contracts helping check if a product is fake in the supply chain

### Smart contracts deciding a loan based on users' credit score

### Smart contracts automatically pricing game items based on their characteristics and NDA

## Decentralized AI Marketplace
The purpose of this marketplace is to provide a marketplace in a decentralized style in which combining results from different providers is possible. Moreover, if APIs from providers must pass test cases in order to receive payment. It means that payment is made when the APIs return correct results of your own test cases.

Below is the flows of how traditional applications use Oraichain.

### Fake news detection
+ Ứng dụng gửi Request --> Validator thực hiện tổng hợp kết quả từ nhiều nguồn --> tính mức độ tin cậy --> ghi lên blockchain --> gửi trả lại ứng dụng

### Automated diagnostics for X-ray images
+ Ứng dụng gửi Request --> Validator thực hiện tổng hợp kết quả từ nhiều nguồn --> danh sách các bệnh --> ghi lên blockchain --> gửi trả lại ứng dụng

### Spam classification
+ Ứng dụng gửi Request --> Validator thực hiện tổng hợp kết quả từ nhiều nguồn --> tính số lần là tin nhắn rác --> ghi lên blockchain --> gửi trả lại ứng dụng

### Handwriting detection using OCR
+ Ứng dụng gửi Request --> Validator thực hiện tổng hợp kết quả từ nhiều nguồn --> tổng hợp chữ viết đã nhận --> ghi lên blockchain --> gửi trả lại ứng dụng

### Citizen ID card detection using OCR
+ Ứng dụng gửi Request --> Validator thực hiện tổng hợp kết quả từ nhiều nguồn --> tổng hợp thông tin đã nhận --> ghi lên blockchain --> gửi trả lại ứng dụng
