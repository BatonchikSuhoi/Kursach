class FuelsController < ApplicationController
    def index
        @all_fuels = Fuel.all
    end
end
