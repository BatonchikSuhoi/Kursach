class CreateTanks < ActiveRecord::Migration[6.0]
  def change
    create_table :tanks do |t|
      t.integer :max_volume, null: false
      t.decimal :fullness, null: false
      t.integer :fuel_type_id

      t.timestamps
    end
    add_index :tanks, :fuel_type_id
  end
end
