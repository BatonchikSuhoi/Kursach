class FuelsController < ApplicationController
    def index
        @all_fuels = Fuel.all
    end

    def create
        @fuel = Fuel.new(max_volume: params[:max_volume].to_i, fullness: params[:fullness].to_d, type_fuel: params[:type]).save
    end

    def update
        hash = params.reject { |k, v| v.blank? }
        Fuel.find(params[:id]).update_attributes(hash.permit(:id, :max_volume, :fullness, :type_fuel))
    end

    def destroy
        Fuel.where(id: params[:user_ids]).destroy_all
    end
end
