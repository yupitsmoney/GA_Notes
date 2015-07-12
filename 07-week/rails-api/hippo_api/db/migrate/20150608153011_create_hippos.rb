class CreateHippos < ActiveRecord::Migration
  def change
    create_table :hippos do |t|
      t.string :name
      t.integer :age
      t.integer :weight
      t.float :price

      t.timestamps null: false
    end
  end
end
