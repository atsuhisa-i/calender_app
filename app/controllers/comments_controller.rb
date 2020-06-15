class CommentsController < ApplicationController
  def create
    event = Event.find(params[:event_id])
    @comment = event.comments.build(comment_params)
    if @comment.save
      redirect_to event_path(params[:event_id])
    else
      redirect_to event_path(params[:event_id])
    end
  end
  private
  def comment_params
    params.require(:comment).permit(:text)
  end
end
