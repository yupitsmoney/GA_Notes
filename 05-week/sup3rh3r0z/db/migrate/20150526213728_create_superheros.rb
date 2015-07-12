class CreateSuperheros < ActiveRecord::Migration
  def change
    create_table :superheros do |t|
      t.integer :power_level
      t.string :weakness
      t.boolean :immortal?
      t.string :name

      t.timestamps null: false
    end
  end
end
