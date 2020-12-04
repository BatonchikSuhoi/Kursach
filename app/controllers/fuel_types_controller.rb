class FuelTypesController < ApplicationController
    def index
        @all_fuel_types = FuelType.all
    end
end