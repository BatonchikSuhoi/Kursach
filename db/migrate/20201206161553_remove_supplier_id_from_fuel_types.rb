class RemoveSupplierIdFromFuelTypes < ActiveRecord::Migration[6.0]
  def change
    remove_column :fuel_types, :supplier_id, :integer
  end
end
