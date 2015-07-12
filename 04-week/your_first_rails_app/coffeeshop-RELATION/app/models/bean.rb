class Bean < ActiveRecord::Base
	has_one :place_of_origin
	accepts_nested_attributes_for :place_of_origin
	has_many :vendors
end