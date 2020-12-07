class ChangeFullnessToBeIntegerInTanks < ActiveRecord::Migration[6.0]
  def change
    change_column :tanks, :fullness, :integer
  end
end
