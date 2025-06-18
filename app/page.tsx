"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { workoutData } from "@/lib/workout-data";
import { useEffect, useState } from "react";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const workoutDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Home() {
  const [defaultTab, setDefaultTab] = useState("");

  useEffect(() => {
    const todayIndex = new Date().getDay();
    setDefaultTab(daysOfWeek[todayIndex]);
  }, []);

  if (!defaultTab) {
    return null; // or a loading spinner
  }

  return (
    <main className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary">
          {workoutData.title}
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          {workoutData.description}
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{workoutData.workoutSplit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {workoutData.workoutSplit.days.map((day) => (
                  <li key={day} className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {day}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {workoutData.importantNotes.map((note) => (
                <div key={note.title}>
                  <h3 className="font-semibold text-card-foreground">
                    {note.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {note.content}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card className="min-h-full">
            <CardHeader>
              <CardTitle className="text-2xl">
                Detailed Workout Plan
              </CardTitle>
              <CardDescription>
                Select a day to see the detailed workout plan. The current day
                is selected by default.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-4">
                  {workoutDays.map((day) => (
                    <TabsTrigger key={day} value={day}>
                      {day.substring(0, 3)}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {workoutData.detailedWorkout.map((day, index) => (
                  <TabsContent
                    value={workoutDays[index]}
                    key={day.day}
                    className="mt-6"
                  >
                    {day.description ? (
                      <p className="text-muted-foreground">{day.description}</p>
                    ) : (
                      <div className="space-y-6">
                        {day.compoundExercise && (
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-primary">
                              Compound Exercise
                            </h3>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Exercise</TableHead>
                                  <TableHead>Sets</TableHead>
                                  <TableHead>Reps</TableHead>
                                  <TableHead>Notes</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow>
                                  <TableCell className="font-medium">
                                    {day.compoundExercise.name}
                                  </TableCell>
                                  <TableCell>
                                    {day.compoundExercise.sets}
                                  </TableCell>
                                  <TableCell>
                                    {day.compoundExercise.reps}
                                  </TableCell>
                                  <TableCell>
                                    {day.compoundExercise.notes}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        )}

                        {day.accessoryExercises &&
                          day.accessoryExercises.length > 0 && (
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-primary">
                                Accessory Exercises
                              </h3>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Exercise</TableHead>
                                    <TableHead>Sets</TableHead>
                                    <TableHead>Reps</TableHead>
                                    <TableHead>Notes</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {day.accessoryExercises.map((ex) => (
                                    <TableRow key={ex.name}>
                                      <TableCell className="font-medium">
                                        {ex.name}
                                      </TableCell>
                                      <TableCell>{ex.sets}</TableCell>
                                      <TableCell>{ex.reps}</TableCell>
                                      <TableCell>{ex.notes}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          )}

                        {day.abs && day.abs.exercises.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-primary">
                              {day.abs.title}
                            </h3>
                            {day.abs.notes && (
                              <p className="text-sm text-muted-foreground mb-2">
                                {day.abs.notes}
                              </p>
                            )}
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Exercise</TableHead>
                                  <TableHead>Sets</TableHead>
                                  <TableHead>Reps</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {day.abs.exercises.map((ex) => (
                                  <TableRow key={ex.name}>
                                    <TableCell className="font-medium">
                                      {ex.name}
                                    </TableCell>
                                    <TableCell>{ex.sets}</TableCell>
                                    <TableCell>{ex.reps}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        )}
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="text-center mt-12 mb-4">
        <p className="text-muted-foreground">{workoutData.finalNote}</p>
      </footer>
    </main>
  );
}
