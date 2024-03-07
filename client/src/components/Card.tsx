type Props = {
  id: number;
  title: string;
  author: string;
  description: string;
  estimated_completion_time: number;
  cover_image: string | null;
};

const Card: React.FC<Props> = ({
  title,
  author,
  description,
  estimated_completion_time,
  cover_image,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div>{title}</div>
      <div>{author}</div>
      <div>{description}</div>
      <div>{estimated_completion_time}</div>
      <div>{cover_image}</div>
    </div>
  );
};

export default Card;
