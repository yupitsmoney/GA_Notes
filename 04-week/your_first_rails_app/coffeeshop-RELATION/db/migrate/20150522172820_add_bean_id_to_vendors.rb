class AddBeanIdToVendors < ActiveRecord::Migration
  def change
    add_column :vendors, :bean_id, :integer
  end
end
