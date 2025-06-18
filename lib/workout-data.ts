export const workoutData = {
  title: "My current workout plan",
  description: "I am currently in a lean bulk phase. I am trying to gain weight while maintaining a lean body composition.",
  importantNotes: [
    {
      title: "Warm-up",
      content:
        "Always begin your workouts with 5-10 minutes of light cardio (e.g., cycling, brisk walking) followed by dynamic stretches to prepare your body.",
    },
    {
      title: "Cool-down",
      content:
        "End each session with 5-10 minutes of static stretching, holding each stretch for 20-30 seconds.",
    },
    {
      title: "Progressive Overload",
      content:
        "This is crucial for continuous gains. Aim to either: Increase the weight while maintaining proper form. Increase the number of repetitions with the same weight. Increase the number of sets. Decrease rest time between sets. Improve your form/muscle connection.",
    },
    {
      title: "Rest Between Sets",
      content:
        "For strength exercises (lower rep ranges), rest 2-3 minutes. For hypertrophy exercises (higher rep ranges), rest 60-90 seconds.",
    },
    {
      title: "Form Over Weight",
      content:
        "Always prioritize proper form to prevent injuries and maximize muscle activation.",
    },
    {
      title: "Listen to Your Body",
      content:
        "If you feel sharp pain, stop the exercise. Don't be afraid to take an extra rest day if needed, especially when lean bulking.",
    },
    {
      title: "Nutrition & Sleep",
      content:
        "These are paramount for lean bulking. Ensure you're in a slight caloric surplus with adequate protein intake (1.6-2.2g per kg of body weight) and getting 7-9 hours of quality sleep per night.",
    },
    {
      title: "Deload Weeks",
      content:
        "Consider incorporating a deload week every 8-12 weeks, reducing volume and intensity by 50% to allow your body to fully recover and prevent burnout.",
    },
  ],
  workoutSplit: {
    title: "The Workout Split",
    description: "Your 6-day split will look like this:",
    days: [
      "Day 1: Legs (Quads Focus) + Upper Abs",
      "Day 2: Push (Chest Focus) + Lower Abs & Obliques",
      "Day 3: Pull (Back Focus) + Upper Abs",
      "Day 4: Legs (Hamstring/Glute Focus) + Lower Abs & Obliques",
      "Day 5: Push (Shoulder Focus) + Upper Abs",
      "Day 6: Pull (Arms & Back Volume) + Lower Abs & Obliques",
      "Day 7: Active Recovery / Rest",
    ],
  },
  detailedWorkout: [
    {
      day: 1,
      title: "Legs (Quads Focus) + Upper Abs",
      compoundExercise: {
        name: "Barbell Back Squats",
        sets: "4",
        reps: "5-8",
        notes: "Strength/Hypertrophy",
      },
      accessoryExercises: [
        { name: "Leg Press", sets: "3", reps: "8-12" },
        {
          name: "Leg Extensions",
          sets: "3",
          reps: "10-15",
          notes: "Focus on squeeze at the top",
        },
        {
          name: "Walking Lunges (with dumbbells)",
          sets: "3",
          reps: "10-12 per leg",
        },
        { name: "Standing Calf Raises", sets: "4", reps: "10-15" },
      ],
      abs: {
        title: "Upper Abs",
        notes: "(Perform after main workout or as a separate mini-session)",
        exercises: [
          { name: "Cable Crunches", sets: "3", reps: "10-15" },
          { name: "Decline Bench Crunches", sets: "3", reps: "15-20" },
        ],
      },
    },
    {
      day: 2,
      title: "Push (Chest Focus) + Lower Abs & Obliques",
      compoundExercise: {
        name: "Barbell Bench Press",
        sets: "4",
        reps: "5-8",
        notes: "Strength/Hypertrophy",
      },
      accessoryExercises: [
        { name: "Incline Dumbbell Press", sets: "3", reps: "8-12" },
        {
          name: "Pec Deck Flyes or Cable Crossovers",
          sets: "3",
          reps: "10-15",
          notes: "Focus on stretch and squeeze",
        },
        {
          name: "Overhead Dumbbell Press (Seated or Standing)",
          sets: "3",
          reps: "8-12",
        },
        {
          name: "Triceps Pushdowns (Rope attachment)",
          sets: "3",
          reps: "10-15",
        },
        { name: "Overhead Dumbbell Extension", sets: "3", reps: "10-15" },
      ],
      abs: {
        title: "Lower Abs & Obliques",
        notes: "(Perform after main workout or as a separate mini-session)",
        exercises: [
          {
            name: "Hanging Leg Raises (or Lying Leg Raises if preferred)",
            sets: "3",
            reps: "10-15",
          },
          {
            name: "Russian Twists (with light weight/medicine ball)",
            sets: "3",
            reps: "15-20 per side",
          },
          { name: "Side Planks", sets: "3", reps: "hold for 30-45 seconds per side" },
        ],
      },
    },
    {
      day: 3,
      title: "Pull (Back Focus) + Upper Abs",
      compoundExercise: {
        name: "Pull-ups (Assisted if needed) or Lat Pulldowns",
        sets: "4",
        reps: "6-10",
      },
      accessoryExercises: [
        { name: "Barbell Rows or Dumbbell Rows", sets: "3", reps: "8-12" },
        { name: "Seated Cable Rows", sets: "3", reps: "10-15" },
        {
          name: "Face Pulls",
          sets: "3",
          reps: "15-20",
          notes: "For rear delts and upper back",
        },
        { name: "Barbell Bicep Curls", sets: "3", reps: "8-12" },
        { name: "Hammer Curls", sets: "3", reps: "10-15" },
      ],
      abs: {
        title: "Upper Abs",
        notes: "(Repeat from Day 1)",
        exercises: [
          { name: "Cable Crunches", sets: "3", reps: "10-15" },
          { name: "Decline Bench Crunches", sets: "3", reps: "15-20" },
        ],
      },
    },
    {
      day: 4,
      title: "Legs (Hamstring/Glute Focus) + Lower Abs & Obliques",
      compoundExercise: {
        name: "Romanian Deadlifts (RDLs)",
        sets: "4",
        reps: "6-10",
        notes: "Focus on hamstring stretch",
      },
      accessoryExercises: [
        {
          name: "Glute-Ham Raise or Nordic Hamstring Curls (if available, otherwise more RDLs or leg curls)",
          sets: "3",
          reps: "8-12",
        },
        { name: "Lying Leg Curls", sets: "3", reps: "10-15" },
        {
          name: "Hip Thrusts (Barbell or Dumbbell)",
          sets: "3",
          reps: "8-12",
          notes: "Focus on glute squeeze",
        },
        { name: "Seated Calf Raises", sets: "4", reps: "10-15" },
      ],
      abs: {
        title: "Lower Abs & Obliques",
        notes: "(Repeat from Day 2)",
        exercises: [
          { name: "Hanging Leg Raises (or Lying Leg Raises)", sets: "3", reps: "10-15" },
          {
            name: "Russian Twists (with light weight/medicine ball)",
            sets: "3",
            reps: "15-20 per side",
          },
          { name: "Side Planks", sets: "3", reps: "hold for 30-45 seconds per side" },
        ],
      },
    },
    {
      day: 5,
      title: "Push (Shoulder Focus) + Upper Abs",
      compoundExercise: {
        name: "Seated Barbell Overhead Press or Seated Dumbbell Press",
        sets: "4",
        reps: "6-10",
      },
      accessoryExercises: [
        {
          name: "Dumbbell Lateral Raises",
          sets: "3",
          reps: "12-15",
          notes: "Strict form, focus on side delts",
        },
        { name: "Front Raises (Dumbbell or Cable)", sets: "3", reps: "10-15" },
        {
          name: "Dips (Assisted if needed) or Close-Grip Bench Press",
          sets: "3",
          reps: "8-12",
          notes: "For triceps",
        },
        { name: "Overhead Cable Extensions", sets: "3", reps: "10-15" },
        { name: "Push-ups (Weighted if possible)", sets: "3", reps: "to failure" },
      ],
      abs: {
        title: "Upper Abs",
        notes: "(Repeat from Day 1/3)",
        exercises: [
          { name: "Cable Crunches", sets: "3", reps: "10-15" },
          { name: "Decline Bench Crunches", sets: "3", reps: "15-20" },
        ],
      },
    },
    {
      day: 6,
      title: "Pull (Arms & Back Volume) + Lower Abs & Obliques",
      compoundExercise: {
        name: "Rack Pulls (from below knees, for back thickness) or Hyperextensions",
        sets: "3",
        reps: "8-12",
        notes: "Focus on lower back/glutes/hamstrings",
      },
      accessoryExercises: [
        {
          name: "Straight-Arm Pulldowns",
          sets: "3",
          reps: "12-15",
          notes: "For lats stretch",
        },
        { name: "Single-Arm Dumbbell Rows", sets: "3", reps: "8-12 per arm" },
        {
          name: "Reverse Pec Deck Flyes or Band Pull-Aparts",
          sets: "3",
          reps: "15-20",
          notes: "For rear delts",
        },
        { name: "Preacher Curls", sets: "3", reps: "8-12" },
        { name: "Concentration Curls", sets: "3", reps: "10-15 per arm" },
        { name: "Reverse Curls (for forearms)", sets: "3", reps: "12-15" },
      ],
      abs: {
        title: "Lower Abs & Obliques",
        notes: "(Repeat from Day 2/4)",
        exercises: [
          { name: "Hanging Leg Raises (or Lying Leg Raises)", sets: "3", reps: "10-15" },
          {
            name: "Russian Twists (with light weight/medicine ball)",
            sets: "3",
            reps: "15-20 per side",
          },
          { name: "Side Planks", sets: "3", reps: "hold for 30-45 seconds per side" },
        ],
      },
    },
    {
      day: 7,
      title: "Active Recovery / Rest",
      description: "Focus on complete rest, light stretching, foam rolling, or low-intensity cardio (e.g., walking, cycling) to aid recovery and blood flow.",
    },
  ],
  finalNote: "Remember consistency, proper nutrition, and adequate rest are just as important as the workout itself for achieving your lean bulk goals.",
}; 