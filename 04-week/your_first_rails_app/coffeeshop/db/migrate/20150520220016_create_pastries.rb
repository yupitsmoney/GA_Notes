class CreatePastries < ActiveRecord::Migration
  def change
    create_table :pastries do |t|
      t.string :name
      t.string :flavor
      t.float :price

      t.timestamps null: false
    end
  end
end
