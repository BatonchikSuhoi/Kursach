class TanksController < ApplicationController
    def index
        @all_tanks = Tank.all
    end

    def create
        @tank = Tank.new(max_volume: params[:max_volume].to_i, fullness: params[:fullness].to_d).save
    end

    def update
        hash = params.reject { |k, v| v.blank? }
        Tank.find(params[:id]).update_attributes(hash.permit(:id, :max_volume, :fullness))
    end

    def destroy
        Tank.where(id: params[:user_ids]).destroy_all
    end
end
