class HeroesController < ApplicationController
  def index
  	if params[:query]
  		search_field = params[:type].to_sym
  		hero_list = Hero.all
  		@heroes = []
  		hero_list.each do |hero|
  			if hero[search_field].downcase.include? params[:query].downcase
  				@heroes << hero
  			end
			end
  		# @heroes = Hero.where(:name => params[:query])
  	else
	    @heroes = Hero.page(params[:page]).per(10).padding(0)
	  end
  end

  def show
  	if params[:commit] == "Next"
  		hero = Hero.find(params[:id].to_i + 1)
  		redirect_to hero_path(hero)
  	elsif params[:commit] == "Prev"
  		hero = Hero.find(params[:id].to_i - 1)
  		redirect_to hero_path(hero)
  	elsif params[:commit] == "Go"
  		hero = Hero.find(params[:hero_id])
  		redirect_to hero_path(hero)
  	else
	  	@hero = Hero.find(params[:id])
	  end
  end
end
