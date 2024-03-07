import Card from "../components/Card";

type Props = {
  items: Course[];
};

type Course = {
    id: number;
    title: string;
    author: string;
    description: string;
    estimated_completion_time: number;
    cover_image: string | null;
  }

const CardsContainer: React.FC<Props> = ({ items }) => {
  return (
    <div className="container">
        <div className="row">
      {items.map((course) =>
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          author={course.author}
          description={course.description}
          estimated_completion_time={course.estimated_completion_time}
          cover_image={course.cover_image}
        />)}
    </div>
    </div>
  );
};

export default CardsContainer;
