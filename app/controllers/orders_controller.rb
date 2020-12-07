class OrdersController < ApplicationController
    def index
        @all_orders = Order.all
        @fuel_types = FuelType.all
    end

    def create
        bill = FuelType.find(params[:fuel_type_id].to_i).cost.to_i * params[:fuel_quantity].to_i
        @order = Order.new(fuel_quantity: params[:fuel_quantity].to_i,
                            fuel_type_id: params[:fuel_type_id].to_i,
                            bill: bill).save
    end

    def destroy
        Order.where(id: params[:user_ids]).destroy_all * params[:fuel_quantity].to_i
    end
end