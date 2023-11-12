import { ExerciseEquipment, ExerciseMuscle, ExerciseResponse } from "@/services/ExerciseService";

export const exercises: ExerciseResponse[] = [
    {
        _id: '1',
        name: "Dumberll Bench Press",
        description: "Bench press with dumbells",
        muscle: ExerciseMuscle.CHEST,
        equipment: ExerciseEquipment.DUMBELLS
    },
    {
        _id: '2',
        name: "Barbell Bench Press",
        description: "Bench press with barbell",
        muscle: ExerciseMuscle.CHEST,
        equipment: ExerciseEquipment.BARBELL
    },
    {
        _id: '3',
        name: "Squat",
        description: "Squat",
        muscle: ExerciseMuscle.UPPER_LEGS,
        equipment: ExerciseEquipment.BARBELL
    },
    {
        _id: '4',
        name: "EZ Biceps Curl",
        description: "Biceps Curl with EZ Barbell",
        muscle: ExerciseMuscle.BICEPS,
        equipment: ExerciseEquipment.EZ_BARBELL
    }
]