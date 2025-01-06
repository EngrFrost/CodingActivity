import { useState } from "react";
import { SendOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Comment } from "../../types/manga";
import { formatDate } from "../../utils/utils";
import { Button, List, ListItem, Text, TextArea } from "../common";

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      text: newComment.trim(),
      createdAt: new Date().toISOString(),
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment("");
  };

  return (
    <div className="mt-8">
      <div className="mb-6">
        <div className="flex gap-2">
          <TextArea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            autoSize={{ minRows: 2, maxRows: 4 }}
            className="bg-tertiary text-blue-500"
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSubmit}
            className="bg-secondary hover:bg-secondary/80"
          >
            Comment
          </Button>
        </div>
      </div>

      <List
        className="bg-tertiary rounded-lg text-[#e5e7eb]"
        dataSource={comments}
        locale={{ emptyText: "No comments yet" }}
        renderItem={(comment: Comment) => (
          <ListItem className="px-6 py-4 border-b border-primary">
            <div className="w-full">
              <Text className="text-white whitespace-pre-wrap">
                {comment?.text}
              </Text>
              <div className="flex items-center gap-2 mt-2">
                <ClockCircleOutlined className="text-muted text-sm" />
                <Text className="text-sm">{formatDate(comment.createdAt)}</Text>
              </div>
            </div>
          </ListItem>
        )}
      />
    </div>
  );
};

export default CommentSection;
