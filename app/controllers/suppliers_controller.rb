class SuppliersController < ApplicationController
    def index
        @all_suppliers = Supplier.all
    end

    def create
        @supplier = Supplier.new(name: params[:name], agent: params[:agent], agent_phone: params[:agent_phone]).save
    end

    def update
        hash = params.reject { |k, v| v.blank? }
        Supplier.find(params[:id]).update_attributes(hash.permit(:id, :name, :agent, :agent_phone))
    end

    def destroy
        Supplier.where(id: params[:user_ids]).destroy_all
    end
end