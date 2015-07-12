class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heros do |t|
      t.string :name
      t.string :identity
      t.string :powers
      t.string :location
      t.string :nemesis
      t.string :description
      t.string :weakness

      t.timestamps null: false
    end
  end
end
