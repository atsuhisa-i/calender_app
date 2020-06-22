# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# アプリ名
  calendar_app

# 概要
  家族間でそれぞれの予定を共有し、家族間のコミュニケーションを促進するアプリケーションです。

# 本番環境
  デプロイ先：https://infinite-peak-47610.herokuapp.com/events

# 制作背景（意図）


# DEMO


# 工夫したポイント


# 使用技術（開発環境）
  Ruby on Rails
  scaffold
  Fullcalendar
  jQuery
  html
  scss

# 課題や今後実装したい機能
  ・javascriptなどを使用して動きのある見た目の実装
  ・旅行などのイベントの際に撮った写真を投稿し、アルバムとして保存できるような機能の実装


# DB設計
## eventsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null : false|
|description|text|
|start_date|datetime|null : false|
|end_date|datetime|null : false|
|name|string|null : false|
|place|string|null : false|

### Association
- has_many : comments, dependent: :destroy

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|event_id|integer|
|text|text|

### Association
- belongs_to : event

