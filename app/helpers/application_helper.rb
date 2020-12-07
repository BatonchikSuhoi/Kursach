module ApplicationHelper
    def fuel_name_by_id(fuel_type_id)
        FuelType.find(fuel_type_id).name
    end
end
