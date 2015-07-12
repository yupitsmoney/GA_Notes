class SuperherosController < ApplicationController
  def index
  	@superheros = Superhero.all
  end

  def show
  	@superhero = Superhero.find(params[:id])
  end

  def new
  	@superhero= Superhero.new

  end

  def create
  	params[:superhero][:immortal?] = to_b params[:superhero][:immortal]
  	superhero = Superhero.new(params.require(:superhero).permit(:name, :power_level, :immortal?, :weakness, :image_url))
  	if superhero.save
  		redirect_to superheros_path
  	else
  		render :new
  	end
  end

  def to_b(string)
  	if string == "true" 
  		return true
  	else 
  		return false
  	end
  end

  def edit
  	@superhero = Superhero.find(params[:id])

  end

  def update
  	params[:superhero][:immortal?] = to_b params[:superhero][:immortal]
  	superhero = Superhero.find(params[:id])
  	if superhero.update_attributes(params.require(:superhero).permit(:name, :power_level, :immortal?, :weakness, :image_url))
  		redirect_to superheros_path
  	else
  		render :edit
  	end
  end

  def destroy
  	superhero = Superhero.find(params[:id])
  	superhero.destroy
  	redirect_to superheros_path
  end

end
