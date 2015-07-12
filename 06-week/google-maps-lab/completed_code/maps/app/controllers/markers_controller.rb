class MarkersController < ApplicationController

    def index
        @markers = Marker.all
    end

    def add_marker
        Marker.create(params.require(:marker).permit(:lat, :lng));
        head :created
    end

    def remove_all
        Marker.delete_all
        head :no_content
    end

    def remove_last
        Marker.last.delete
        head :no_content
    end

end