import { Modal } from 'antd';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      centered
      className="video-modal"
    >
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[450px]"
        />
      </div>
    </Modal>
  );
};

export default VideoModal; 