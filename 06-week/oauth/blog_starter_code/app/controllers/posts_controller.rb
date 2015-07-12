class PostsController < ApplicationController

    def index
        @posts = Post.all
    end

    def new
        @post = Post.new
    end

    def create
        post = Post.new(post_params)
        if post.valid?
            current_user.posts.push post
            current_user.save
            redirect_to posts_path
        else
            flash["alert-warning"] = "Sorry, post not created"
            redirect_to new_post_path
        end
    end

    def show
        @post = Post.find(params[:id])
        @comment = Comment.new
    end

private

    def post_params
        params.require(:post).permit(:title, :body)
    end

end
