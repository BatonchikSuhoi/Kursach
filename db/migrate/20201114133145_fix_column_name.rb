class FixColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :fuels, :type, :type_fuel
  end
end
