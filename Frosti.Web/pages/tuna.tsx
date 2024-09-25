import Chat from "../components/Chat/Chat";
import { useState } from "react";
import IMaterial, { MaterialType } from "../types/tuna";
import Task from "../components/Task/Index";
import { Box, Center } from "@mantine/core";

export default function Tuna() {

    const [materials, setMaterials] = useState<IMaterial[]>([
        {
            id: '1',
            type: MaterialType.Cluster, // or MaterialType.Task
            title: 'Sample Cluster',
            description: 'This is a sample cluster',
            path: null, // or provide a path if needed
            targetDate: null, // or provide a date
            assignedTo: null, // or provide an IAuthor object
            createdBy: null, // or provide an IAuthor object
            state: 'Open', // or another state
            children: [
                {
                    id: '1.1',
                    type: MaterialType.Task,
                    title: 'Sample Task',
                    description: 'This is a sample task',
                    path: '/path/to/task',
                    targetDate: new Date(), // or null
                    assignedTo: { name: 'John Doe', id: 'author1' }, // Sample IAuthor object
                    createdBy: { name: 'Jane Doe', id: 'author2' }, // Sample IAuthor object
                    state: 'In Progress',
                    children: null, // Tasks typically don’t have children, but you can add more if needed
                }
            ]
        }
    ]);

    return (
        <Center mt='25rem'>
            {
                materials && materials[0].children && <Task material={materials[0].children[0]} />
            }
        </Center>
    )
}