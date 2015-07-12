class AddImageUrlToSuperhero < ActiveRecord::Migration
  def change
    add_column :superheros, :image_url, :string
  end
end
