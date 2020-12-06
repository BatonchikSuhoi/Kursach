class SuppliesController < ApplicationController
    def index
        @all_supplies = Supply.all
        @suppliers = Supplier.all
        @fuel_types = FuelType.all
    end

    def create
        @supply = Supply.new(fuel_quantity: params[:fuel_quantity].to_i,
                             fuel_type_id: params[:fuel_type_id].to_i,
                             supplier_id: params[:supplier_id].to_i).save
    end

    def update
        hash = params.reject { |k, v| v.blank? }
        Supply.find(params[:id]).update_attributes(hash.permit(:id,
                                                               :fuel_quantity,
                                                               :fuel_type_id,
                                                               :supplier_id))
    end

    def destroy
        Supply.where(id: params[:user_ids]).destroy_all
    end
end