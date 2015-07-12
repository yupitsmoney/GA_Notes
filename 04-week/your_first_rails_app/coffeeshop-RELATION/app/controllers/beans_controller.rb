class BeansController < ApplicationController

  def index
    @beans = Bean.all
  end

  def show
    @bean = Bean.find(params[:id])
  end

  def new
    @bean = Bean.new
    @bean.place_of_origin = PlaceOfOrigin.new
  end

  def create
    @bean = Bean.new(params.require(:bean).permit(:name, :roast, :quantity, place_of_origin_attributes: [:province, :country]))
    if @bean.save and @bean.place_of_origin.save
      redirect_to beans_path
    else render :new
    end
  end

  def edit
    @bean = Bean.find(params[:id])
  end

  def update
    @bean = Bean.find(params[:id])

    if @bean.update_attributes(params.require(:bean).permit(:name, :roast, :origin, :quantity))
      redirect_to beans_path
    else
      render :edit
    end
  end

  def destroy
    @bean = Bean.find(params[:id])
    @bean.destroy
    redirect_to beans_path
  end

# add private params ??
  # private
  # def bean_params
  #   params.require(:bean).permit(:name, :roast, :origin, :quantity)
  # end

end
