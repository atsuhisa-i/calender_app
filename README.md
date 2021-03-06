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
  家族間で1つのカレンダーを共有し、それぞれの予定を入れておくことで、誰がいつどこで何をする（または、している）のかが、すぐに分かって、お互いの状況確認と家族の予定の摺り合わせや目標の共有、コミュニケーションの円滑化が可能になります。

# DEMO
- トップページ
<img width="1438" alt="スクリーンショット 2020-06-23 21 38 25" src="https://user-images.githubusercontent.com/60007511/85404593-20e9b680-b59a-11ea-86bd-285ea75db8d7.png">

トップページ左上の「新しい予定をいれる」をクリックすると予定入力フォームに遷移します。

- 予定入力フォーム
<img width="1438" alt="スクリーンショット 2020-06-23 21 43 50" src="https://user-images.githubusercontent.com/60007511/85405283-2267ae80-b59b-11ea-9a3e-a92cd126d6bf.png">

予定を送信するとトップページに登録した予定が表示されます。

- トップページの予定表示
<img width="1433" alt="スクリーンショット 2020-06-23 21 45 19" src="https://user-images.githubusercontent.com/60007511/85405452-65298680-b59b-11ea-8a99-0bdbcc50096c.png">

表示されている予定をクリックすると予定の詳細へ遷移します。

- 予定詳細ページ
<img width="1437" alt="スクリーンショット 2020-06-23 21 45 58" src="https://user-images.githubusercontent.com/60007511/85405594-9f932380-b59b-11ea-8b2f-8625a3337666.png">

予定詳細ページから登録した予定の編集ページへの遷移、予定の削除、予定へのコメントの投稿が可能です。

- 予定編集ページ
<img width="1437" alt="スクリーンショット 2020-06-23 21 46 25" src="https://user-images.githubusercontent.com/60007511/85405787-dec17480-b59b-11ea-8c73-af9bdc0d16fa.png">


# 工夫したポイント
  単純に予定だけを登録できるものではなく、各予定に対してコメントできる機能をつけました。誰かの目標に対する応援コメントや、各予定に対する要望などを記載しておくことでコミュニケーションの円滑になればと考えています。

# 使用技術（開発環境）
  - Ruby on Rails
  - scaffold
  - Fullcalendar
  - jQuery
  - html
  - scss

# 課題や今後実装したい機能
  - javascriptなどを使用して動きのある見た目の実装
  - 旅行などのイベントの際に撮った写真を投稿し、アルバムとして保存できるような機能の実装


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

