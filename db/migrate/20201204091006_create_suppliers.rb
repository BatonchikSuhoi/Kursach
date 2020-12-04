class CreateSuppliers < ActiveRecord::Migration[6.0]
  def change
    create_table :suppliers do |t|
      t.string :name
      t.string :agent
      t.string :agent_phone

      t.timestamps
    end
  end
end
