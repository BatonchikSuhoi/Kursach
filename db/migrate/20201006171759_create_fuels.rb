class CreateFuels < ActiveRecord::Migration[6.0]
  def change
    create_table :fuels do |t|
      t.integer :max_volume, null: false
      t.decimal :fullness, null: false
      t.string :type

      t.timestamps
    end
  end
end
