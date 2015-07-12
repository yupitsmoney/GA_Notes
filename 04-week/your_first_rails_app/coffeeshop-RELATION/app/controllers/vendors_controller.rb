class VendorsController < ApplicationController

	def new
		@bean = Bean.find(params[:bean_id])
		@vendor = Vendor.new
	end

	def create
		@bean = Bean.find(params[:bean_id])
		@bean.vendors.push(Vendor.new(params.require(:vendor).permit(:name, :city, :state)))
		if @bean.save
			redirect_to beans_path
		end
	end

end
