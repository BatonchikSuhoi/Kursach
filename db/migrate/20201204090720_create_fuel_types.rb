class CreateFuelTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :fuel_types do |t|
      t.string :name
      t.integer :supplier_id
      t.decimal :cost

      t.timestamps
    end
    add_index :fuel_types, :supplier_id
  end
end
