
export function calculateClassAverage(students, courseId) {
    const grades = students
        .map(student =>
            student.courses.find(
                course => course.courseId === courseId
            )
        )
        .filter(course => course !== undefined)
        .map(course => course.grade);

    if (grades.length === 0) {
        return 0;
    }

    const total = grades.reduce(
        (sum, grade) => sum + grade,
        0
    );

    return total / grades.length;
}

export function findTopStudent(students) {
    if (students.length === 0) {
        return null;
    }

    return students.reduce((top, current) =>
        current.getAverage() > top.getAverage()
            ? current
            : top
    );
}

export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}
