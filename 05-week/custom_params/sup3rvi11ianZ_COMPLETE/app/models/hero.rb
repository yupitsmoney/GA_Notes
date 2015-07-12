class Hero < ActiveRecord::Base
  def to_partial_path
    'heroes/hero'
  end
end
