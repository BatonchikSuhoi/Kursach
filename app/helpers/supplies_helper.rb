module SuppliesHelper
    def supplier_name_by_id(supplier_id)
        Supplier.find(supplier_id).name
    end
end