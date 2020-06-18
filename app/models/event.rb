class Event < ApplicationRecord
  has_many :comments, dependent: :destroy

  validates :name, :title, :start_date, :end_date, presence: true
end
