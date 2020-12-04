class Supplier < ApplicationRecord
    belongs_to :fuel_type
    belongs_to :supply
end
