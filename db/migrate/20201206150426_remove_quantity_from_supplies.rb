class RemoveQuantityFromSupplies < ActiveRecord::Migration[6.0]
  def change
    remove_column :supplies, :quantity, :integer
  end
end
