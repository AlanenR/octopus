import "./App.css";
import CardsContainer from "./containers/CardsContainer";
import Slider from "./containers/Slider";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3001/courses";

type Course = {
  id: number;
  title: string;
  author: string;
  description: string;
  estimated_completion_time: number;
  cover_image: string | null;
};

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      setCourses(data as Course[]);
    };

    fetchCourses();
  }, []);
  return (
    <div className="App">
      <CardsContainer items={courses} />
      <Slider />
    </div>
  );
}

export default App;
