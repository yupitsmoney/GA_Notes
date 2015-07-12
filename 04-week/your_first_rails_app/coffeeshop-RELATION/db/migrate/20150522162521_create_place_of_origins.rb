class CreatePlaceOfOrigins < ActiveRecord::Migration
  def change
    create_table :place_of_origins do |t|
      t.string :country
      t.string :province
      t.integer :bean_id

      t.timestamps null: false
    end
  end
end
