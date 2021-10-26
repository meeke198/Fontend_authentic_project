class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
       @user = chosen_user 
    end

    def index
        @users = User.all
    end

    def update
        @user = chosen_user
        if @user && @user.update(user_params)
            render :show
        elsif !@user
            render json: ['User does not exist'], status: 422
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = chosen_user
        if @user
            @user.destroy
            render :show
        else
            render ['User could not be found']
        end
    end

    private

    def chosen_user
        User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end