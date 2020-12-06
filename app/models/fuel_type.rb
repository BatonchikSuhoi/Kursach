class FuelType < ApplicationRecord
    has_many :order
    has_many :supplies
end
