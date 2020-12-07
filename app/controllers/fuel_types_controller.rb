class FuelTypesController < ApplicationController
    def index
        @all_fuel_types = FuelType.all
        @suppliers = Supplier.all
    end

    def create
        @fuel_type = FuelType.new(name: params[:name],
                                  cost: params[:cost].to_d).save
    end

    def update
        hash = params.reject { |k, v| v.blank? }
        FuelType.find(params[:id]).update_attributes(hash.permit(:id,
                                                                :name,
                                                                :cost))
    end

    def destroy
        FuelType.where(id: params[:user_ids]).destroy_all
    end
end