---
id: Introduction
title: Introduction
sidebar_label: Introduction
---

## Oraichain Whitepaper

Tài liệu này mô tả outline kế hoạch nghiên cứu và triển khai của Oraichain(Oracle Artificial Intelligence for Blockchain).

### Introduction

Các nền tảng smart contract phổ biến hiện nay nơi mà thực hiện các đoạn mã trên môi trường blockchain một cách minh bạch và tin tưởng việc thực hiện các đoạn mã một cách minh bạch và tin tưởng mang lại nhiều giá trị và giúp giải quyết các bài toán nhưng các đoạn mã thực hiện trong các smart contract gặp vấn đề là thiếu nguồn data thực tế từ ngoài vào một cách tin cậy. Sự thiếu thông tin này làm hạn chế các khả năng và tính hiệu quả của các smart contract.

Current smart contracts are not smart enough to solve the below scenarios.
+ Identification based on biometric methods, such as face and fingerprint
+ Lending based on credit scores
+ Automated trading based on price prediction
+ Comparison of two products from their images
+ Evaluating the price of game items

Current smart contracts cannot run AI models inside and it is almost impossible to integrate an AI model in a smart contract. There are several reasons for this limitation:
+ Smart contract has very small storage. Huge storage, such as Ethereum, is very expensive.
+ Smart contract is written in very high level programming languages. AI model is typically written in Python or Java.
+ Running AI smart contract is impossible in e.g. Ethereum virtual machine.

Oraichain giúp giải quyết vấn đề này bằng cách cung cấp cơ chế cho phép các smart contract có thể sử dụng các dữ liệu từ bên ngoài một cách tin tưởng. Đặc biệt orai tập chung vào các dữ liệu từ các model AI. Dự án được thiết kế theo các mục đích chính sau:

1. Tối ưu hoá cho dữ liệu AI.
2. Kiểm tra độ chính xác của AI providers dựa trên yêu cầu của người dùng. Ví dụ: login sử dụng mật khẩu sẽ đúng 100%, nhưng nếu sử dụng face recognition thì độ chính xác là 90%~100%.
3. Tộc độ và khả năng mở rộng
4. Cross-Chain Compatibility: The system must be blockchain-agnostic and able to serve data to most publicly available blockchains. Verification of data authenticity on the target blockchains must be efficient and trustless by nature.
