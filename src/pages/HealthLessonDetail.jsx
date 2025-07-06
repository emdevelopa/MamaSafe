import { useParams, useNavigate } from "react-router-dom";

// Example lesson data (in a real app, fetch from API or context)
const LESSONS = [
  {
    id: "1",
    category: "NUTRITION",
    title: "Essential Nutrients During Pregnancy",
    content: `
      Pregnancy is a crucial time for both the mother and the developing baby. 
      Consuming the right nutrients helps ensure healthy growth and development. 
      Key nutrients include folic acid, iron, calcium, vitamin D, and protein.
      - **Folic Acid**: Prevents neural tube defects. Found in leafy greens, beans, and fortified cereals.
      - **Iron**: Supports increased blood volume. Found in red meat, beans, and spinach.
      - **Calcium & Vitamin D**: Important for bone development. Found in dairy, fortified juices, and sunlight exposure.
      - **Protein**: Supports tissue growth. Found in lean meats, eggs, and legumes.
      Remember to stay hydrated and consult your healthcare provider for personalized advice.
    `,
    duration: "15 min read",
  },
  // Add more lessons as needed
  {
    id: "2",
    category: "NUTRITION",
    title: "Healthy Eating Habits for Expecting Mothers",
    content: `
      Eating healthy during pregnancy is vital. Focus on balanced meals, regular eating times, and limiting processed foods.
      - **Eat a variety of foods**: Include fruits, vegetables, whole grains, and lean proteins.
      - **Limit sugar and salt**: Too much can lead to complications.
      - **Stay hydrated**: Drink plenty of water throughout the day.
      - **Avoid risky foods**: Such as raw fish, unpasteurized cheese, and undercooked meats.
      Consult your doctor for a meal plan that fits your needs.
    `,
    duration: "10 min read",
  },
];

export default function HealthLessonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lesson = LESSONS.find((l) => l.id === id);

  if (!lesson) {
    return (
      <div className="p-8">
        <button
          className="mb-4 px-4 py-2 bg-[#4cb072] text-white rounded"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h2 className="text-2xl font-bold mb-4">Lesson Not Found</h2>
        <p>The lesson you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-[#4cb072] text-white rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <p className="text-[#4cb072de] text-sm mb-2">{lesson.category}</p>
      <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
        <span>{lesson.duration}</span>
      </div>
      <div className="prose prose-green max-w-none">
        {/* Render content as markdown-like text */}
        {lesson.content.split("\n").map((line, idx) =>
          line.trim().startsWith("-") ? (
            <li key={idx}>{line.replace(/^-+\s*/, "")}</li>
          ) : (
            <p key={idx}>{line.trim()}</p>
          )
        )}
      </div>
    </div>
  );
}
