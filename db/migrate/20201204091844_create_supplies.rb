class CreateSupplies < ActiveRecord::Migration[6.0]
  def change
    create_table :supplies do |t|
      t.integer :quantity
      t.integer :fuel_quantity
      t.integer :fuel_type_id
      t.integer :supplier_id

      t.timestamps
    end
    add_index :supplies, :fuel_type_id
    add_index :supplies, :supplier_id
  end
end
