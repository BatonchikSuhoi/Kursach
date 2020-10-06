class AddNameToFuel < ActiveRecord::Migration[6.0]
  def change
    add_column :fuels, :name, :string
  end
end
