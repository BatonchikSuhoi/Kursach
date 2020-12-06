module SuppliesHelper
    def supplier_name_by_id(supplier_id)
        Supplier.find(supplier_id).name
    end

    def fuel_name_by_id(fuel_type_id)
        FuelType.find(fuel_type_id).name
    end
end