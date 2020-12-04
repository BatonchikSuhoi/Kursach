class Supply < ApplicationRecord
    has_one :fuel_type
    has_one :supplier_id
end
