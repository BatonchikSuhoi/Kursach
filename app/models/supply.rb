class Supply < ApplicationRecord
    belongs_to :fuel_type
    belongs_to :supplier
end
