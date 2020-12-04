class SuppliersController < ApplicationController
    def index
        @all_suppliers = Supplier.all
    end
end