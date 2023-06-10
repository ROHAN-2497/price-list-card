import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {


   const marksArray = [
        {"id": 1, "name": "John Doe", "physics": 85, "chemistry": 90, "math": 92},
        {"id": 2, "name": "Jane Smith", "physics": 90, "chemistry": 88, "math": 95},
        {"id": 3, "name": "Alex Johnson", "physics": 78, "chemistry": 85, "math": 80},
        {"id": 4, "name": "Emily Davis", "physics": 92, "chemistry": 87, "math": 90},
        {"id": 5, "name": "Michael Brown", "physics": 82, "chemistry": 79, "math": 88},
        {"id": 6, "name": "Olivia Wilson", "physics": 95, "chemistry": 93, "math": 96},
        {"id": 7, "name": "William Taylor", "physics": 88, "chemistry": 91, "math": 89},
        {"id": 8, "name": "Sophia Anderson", "physics": 86, "chemistry": 84, "math": 85},
        {"id": 9, "name": "James Martin", "physics": 77, "chemistry": 79, "math": 82},
        {"id": 10, "name": "Emma Thompson", "physics": 94, "chemistry": 92, "math": 96},
        {"id": 11, "name": "Daniel Wilson", "physics": 83, "chemistry": 88, "math": 85},
        {"id": 12, "name": "Ava Robinson", "physics": 90, "chemistry": 85, "math": 89}
    ]
    


    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="math" stroke="#82ca9d"></Line>
                <Line dataKey="chemistry" stroke="#8884d8"></Line>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>

        </div>
    );
};

export default Dashboard;