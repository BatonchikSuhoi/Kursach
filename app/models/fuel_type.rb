class FuelType < ApplicationRecord
    has_one :supplier
    belongs_to :order
    belongs_to :supply
end
