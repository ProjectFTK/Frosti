import React, { useState } from 'react';
import {
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Avatar,
  ActionIcon,
  Tooltip,
  TextInput,
  Textarea,
  Select,
  Button
} from '@mantine/core';
import { IconUser, IconFolder, IconFileText, IconCalendarEvent, IconEdit, IconCheck, IconX } from '@tabler/icons-react';
import IMaterial, { MaterialType } from '../../types/tuna';

interface TaskProps {
  material: IMaterial;
}

const Task: React.FC<TaskProps> = ({ material }) => {
  const [editMode, setEditMode] = useState(false);
  const [editableMaterial, setEditableMaterial] = useState<IMaterial>(material);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    //onSave(editableMaterial);  // Call the onSave function when saving changes
    setEditMode(false);        // Exit edit mode after saving
  };

  const renderIcon = () => {
    if (editableMaterial.type === MaterialType.Cluster) return <IconFolder size={24} />;
    return <IconFileText size={24} />;
  };

  return (
    <Card shadow="md" padding="xl" radius="lg" withBorder style={{ maxWidth: 400 }}>
      <Group position="apart" mb="md">
        <Group>
          {renderIcon()}
          {editMode ? (
            <TextInput
              value={editableMaterial.title}
              onChange={(e) => setEditableMaterial({ ...editableMaterial, title: e.currentTarget.value })}
              placeholder="Title"
              size="lg"
              style={{ width: '100%' }}
            />
          ) : (
            <Text size="lg" weight={600}>
              {editableMaterial.title}
            </Text>
          )}
        </Group>
        {editableMaterial.state && (
          <Badge color={editableMaterial.state === 'Open' ? 'green' : 'red'}>
            {editMode ? (
              <Select
                value={editableMaterial.state}
                onChange={(value) => setEditableMaterial({ ...editableMaterial, state: value || null })}
                data={['Open', 'In Progress', 'Closed']}
              />
            ) : (
              editableMaterial.state
            )}
          </Badge>
        )}
      </Group>

      {editMode ? (
        <Textarea
          value={editableMaterial.description || ''}
          onChange={(e) => setEditableMaterial({ ...editableMaterial, description: e.currentTarget.value })}
          placeholder="Description"
          autosize
          minRows={2}
        />
      ) : (
        <Text size="sm" color="dimmed" mt="sm">
          {editableMaterial.description || 'No description available'}
        </Text>
      )}

      <Group mt="lg" position="apart">
        {editableMaterial.assignedTo && (
          <Group spacing="xs">
            <Avatar size="sm" radius="xl">
              {editableMaterial.assignedTo.name[0]}
            </Avatar>
            {editMode ? (
              <TextInput
                value={editableMaterial.assignedTo.name}
                onChange={(e) =>
                  setEditableMaterial({
                    ...editableMaterial,
                  })
                }
                placeholder="Assigned to"
              />
            ) : (
              <Text size="sm">Assigned: {editableMaterial.assignedTo.name}</Text>
            )}
          </Group>
        )}

        {editableMaterial.targetDate && (
          <Group spacing="xs">
            <IconCalendarEvent size={16} />
            {editMode ? (
              <TextInput
                type="date"
                value={new Date(editableMaterial.targetDate).toISOString().split('T')[0]}
                onChange={(e) =>
                  setEditableMaterial({ ...editableMaterial, targetDate: new Date(e.currentTarget.value) })
                }
              />
            ) : (
              <Text size="sm" color="dimmed">
                {new Date(editableMaterial.targetDate).toLocaleDateString()}
              </Text>
            )}
          </Group>
        )}
      </Group>

      <Group mt="md" spacing="xs">
        {editableMaterial.createdBy && (
          <Group spacing="xs">
            <IconUser size={16} />
            <Text size="sm">Created by: {editableMaterial.createdBy.name}</Text>
          </Group>
        )}
      </Group>

      {editableMaterial.children && editableMaterial.children.length > 0 && (
        <Stack mt="lg" spacing="sm">
          {editableMaterial.children.map((child) => (
            <Task key={child.id} material={child} />
          ))}
        </Stack>
      )}

      <Group mt="lg" position="right" spacing="xs">
        {editMode ? (
          <>
            <Tooltip label="Save Changes">
              <ActionIcon color="green" variant="outline" onClick={handleSave}>
                <IconCheck size={18} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Cancel Editing">
              <ActionIcon color="red" variant="outline" onClick={toggleEditMode}>
                <IconX size={18} />
              </ActionIcon>
            </Tooltip>
          </>
        ) : (
          <Tooltip label="Edit Task">
            <ActionIcon color="blue" variant="outline" onClick={toggleEditMode}>
              <IconEdit size={18} />
            </ActionIcon>
          </Tooltip>
        )}
      </Group>
    </Card>
  );
};

export default Task;
