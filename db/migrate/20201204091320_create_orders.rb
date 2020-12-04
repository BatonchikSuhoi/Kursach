class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :name
      t.integer :fuel_quantity
      t.integer :bill
      t.integer :fuel_type_id

      t.timestamps
    end
    add_index :orders, :fuel_type_id
  end
end
