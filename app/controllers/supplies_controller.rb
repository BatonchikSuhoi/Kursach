class SuppliesController < ApplicationController
    def index
        @all_supplies = Supply.all
    end
end